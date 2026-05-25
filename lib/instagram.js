import fs from "node:fs";
import path from "node:path";

import { products as fallbackProducts } from "@/lib/products";

const USERNAME = "ananthula_online";
const PROFILE_URL = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`;
const LOCAL_IMAGE_DIR = path.join(process.cwd(), "public", "shop");

function inferCategory(caption = "") {
  const text = caption.toLowerCase();

  if (/(kids|little|baby|child|princess)/i.test(text)) return "Kids";
  if (/(co-?ord|coord|crop top|party wear|dress)/i.test(text)) return "Women";
  if (/(bridal|wedding|silk|pattu|banaras|georgette|tanjore|saree)/i.test(text)) return "Sarees";
  return "Ethnic Wear";
}

function titleFromCaption(caption = "", category = "Collection") {
  const firstLine = caption.split("\n")[0].replace(/[#*_`]/g, "").trim();
  if (!firstLine) return `${category} Collection`;

  const cleaned = firstLine.replace(/[^\p{L}\p{N}\s&|.,'’-]/gu, "").trim();
  if (!cleaned) return `${category} Collection`;

  return cleaned.length > 42 ? `${cleaned.slice(0, 42).trim()}...` : cleaned;
}

function cleanCaption(caption = "") {
  const normalized = caption.replace(/\s+/g, " ").trim();
  return normalized.length > 120 ? `${normalized.slice(0, 120).trim()}...` : normalized;
}

function getLocalImage(shortcode, index) {
  const localPath = path.join(LOCAL_IMAGE_DIR, `${shortcode}.jpg`);

  if (fs.existsSync(localPath) && fs.statSync(localPath).size > 1024) {
    return `/shop/${shortcode}.jpg`;
  }

  return fallbackProducts[index % fallbackProducts.length]?.image || fallbackProducts[0].image;
}

function toProduct(node, index) {
  const caption = node?.edge_media_to_caption?.edges?.[0]?.node?.text || "";
  const category = inferCategory(caption);

  return {
    id: node.shortcode,
    shortcode: node.shortcode,
    name: titleFromCaption(caption, category),
    category,
    description: cleanCaption(caption) || "Latest style from Ananthula Online.",
    image: getLocalImage(node.shortcode, index),
    price: "Inquire",
    tag: index < 4 ? "best" : "new",
    isNew: index < 6,
    link: `https://www.instagram.com/p/${node.shortcode}/`
  };
}

function fallbackShopData() {
  return {
    profile: {
      username: USERNAME,
      fullName: "ANANTHULA KEDARI • SINCE 1951",
      biography:
        "Pure Pattu Sarees & Ethnic Wear • Trusted Saree Store in Warangal • Bridal | Wedding | Dresses",
      followers: "16K+",
      posts: 210,
      profilePic: ""
    },
    posts: fallbackProducts
  };
}

export async function fetchInstagramShopData() {
  try {
    const response = await fetch(PROFILE_URL, {
      cache: "no-store",
      headers: {
        "x-ig-app-id": "936619743392459",
        "user-agent": "Mozilla/5.0"
      }
    });

    if (!response.ok) {
      return fallbackShopData();
    }

    const data = await response.json();
    const user = data?.data?.user;
    const timeline = user?.edge_owner_to_timeline_media;
    const edges = timeline?.edges || [];

    if (!user || edges.length === 0) {
      return fallbackShopData();
    }

    const profile = {
      username: user.username || USERNAME,
      fullName: user.full_name || "ANANTHULA KEDARI • SINCE 1951",
      biography: user.biography || "Pure Pattu Sarees & Ethnic Wear",
      followers: user?.edge_followed_by?.count || null,
      posts: timeline?.count || edges.length,
      profilePic: ""
    };

    const posts = edges.map((entry, index) => toProduct(entry.node, index)).filter((entry) => Boolean(entry.image));

    return {
      profile,
      posts: posts.length ? posts : fallbackProducts
    };
  } catch {
    return fallbackShopData();
  }
}
