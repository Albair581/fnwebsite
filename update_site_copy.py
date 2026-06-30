import re

with open("/Users/alber/Dev/FN/fnwebsite/src/lib/site-copy.ts", "r") as f:
    content = f.read()

# 1. FeatureSlug
content = re.sub(r'\s*\|\s*"donation"', '', content)
content = re.sub(r'\s*"donation",', '', content)

# 2. OverviewCopy type
content = re.sub(r'\s*donationLabel: string;\s*donationSub: string;', '', content)

# 3. overviewCopy.en
content = re.sub(r'\s*"Donation Safety Matching",', '', content)
content = re.sub(r'\s*donationLabel: "🎯 Donate",\s*donationSub: "Safe matches found",', '', content)

# 4. overviewCopy.zh-TW
content = re.sub(r'\s*"捐贈安全配對",', '', content)
content = re.sub(r'\s*donationLabel: "🎯 捐贈",\s*donationSub: "已找到可行據點",', '', content)

# 5. Gallery En
old_gallery_en = """      {
        imagePath: "/images/Records En Pad.png",
        title: "Records View",
        description: "Expiration-first list with urgency-aware organization.",
        alt: "Records screen showing food items and expiration dates",
      },
      {
        imagePath: "/images/Medications En Pad.png",
        title: "Medications View",
        description: "Track your medications securely with the same expiration-first urgency.",
        alt: "Medications screen showing items and expiration dates",
      },
      {
        imagePath: "/images/Chat En Pad.png",
        title: "AI Assistant",
        description: "Recipes and meal plans generated from your real inventory.",
        alt: "AI chat screen with recipe and meal plan cards",
      },
      {
        imagePath: "/images/Trees En Pad.png",
        title: "Donation Center Finder",
        description: "Map and list views with safety-based center matching.",
        alt: "Donation feature map with nearby accepted centers",
      },"""
new_gallery_en = """      {
        imagePath: "/images/En-Records.png",
        title: "Records View",
        description: "Expiration-first list with urgency-aware organization.",
        alt: "Records screen showing food items and expiration dates",
      },
      {
        imagePath: "/images/En-Medications.png",
        title: "Medications View",
        description: "Track your medications securely with the same expiration-first urgency.",
        alt: "Medications screen showing items and expiration dates",
      },
      {
        imagePath: "/images/En-Chat.png",
        title: "AI Assistant",
        description: "Recipes and meal plans generated from your real inventory.",
        alt: "AI chat screen with recipe and meal plan cards",
      },"""
content = content.replace(old_gallery_en, new_gallery_en)

# 6. Gallery Zh
old_gallery_zh = """      {
        imagePath: "/images/Records Zh Pad.png",
        title: "記錄頁",
        description: "依到期優先排序的食材清單。",
        alt: "食材記錄頁顯示到期日期與急迫度",
      },
      {
        imagePath: "/images/Medications Zh pad.png",
        title: "藥品記錄",
        description: "使用相同的到期優先邏輯，安全追蹤你的藥品。",
        alt: "藥品記錄畫面顯示項目與到期日",
      },
      {
        imagePath: "/images/Chat Zh Pad.png",
        title: "AI 對話頁",
        description: "根據食材清單產生食譜與餐計畫。",
        alt: "AI 對話頁顯示食譜與餐計畫卡片",
      },
      {
        imagePath: "/images/Trees Zh Pad.png",
        title: "捐贈資料庫",
        description: "地圖與清單提供捐贈據點資料。",
        alt: "捐贈地圖顯示可捐贈據點",
      },"""
new_gallery_zh = """      {
        imagePath: "/images/Zh-Records.png",
        title: "記錄頁",
        description: "依到期優先排序的食材清單。",
        alt: "食材記錄頁顯示到期日期與急迫度",
      },
      {
        imagePath: "/images/Zh-Medications.png",
        title: "藥品記錄",
        description: "使用相同的到期優先邏輯，安全追蹤你的藥品。",
        alt: "藥品記錄畫面顯示項目與到期日",
      },
      {
        imagePath: "/images/Zh-Chat.png",
        title: "AI 對話頁",
        description: "根據食材清單產生食譜與餐計畫。",
        alt: "AI 對話頁顯示食譜與餐計畫卡片",
      },"""
content = content.replace(old_gallery_zh, new_gallery_zh)

# 7. featuresHubCopy.en cards donation
donation_card_en = re.search(r'\s*\{\s*slug: "donation",.*?bullets: \[.*?\],.*?\},', content, flags=re.DOTALL)
if donation_card_en:
    content = content.replace(donation_card_en.group(0), "")

# 8. featuresHubCopy.zh-TW cards donation
donation_card_zh = re.search(r'\s*\{\s*slug: "donation",.*?bullets: \[.*?\],.*?\},', content, flags=re.DOTALL)
# wait, there's two of them. The first one is en, the second is zh.
# Let's just remove all objects with slug: "donation" in featuresHubCopy
# Actually let's use a regex that matches both
content = re.sub(r'\s*\{\s*slug: "donation".*?bullets: \[.*?\],\s*\},', '', content, flags=re.DOTALL)

# 9. featureDetailsCopy donation block
content = re.sub(r'\s*donation: \{.*?imagePath: ".*?",\s*\},', '', content, flags=re.DOTALL)

# 10. Update feature images
content = content.replace('imagePath: "/images/Recipes En Pad.png",', 'imagePath: "/images/En-Recipe.png",')
content = content.replace('imagePath: "/images/Sync En Pad.png",', 'imagePath: "/images/En-Sync.png",')
content = content.replace('imagePath: "/images/Widgets En Pad.png",', 'imagePath: "/images/En-Widgets.png",')

content = content.replace('imagePath: "/images/Recipe Zh Pad.png",', 'imagePath: "/images/Zh-Recipe.png",')
content = content.replace('imagePath: "/images/Sync Zh Pad.png",', 'imagePath: "/images/Zh-Sync.png",')
content = content.replace('imagePath: "/images/Widgets Zh Pad.png",', 'imagePath: "/images/Zh-Widgets.png",')

# 11. Trees feature image
# In EN:
content = content.replace(
    'mediaAlt: "Tree Gamification",\n      imagePath: "",',
    'mediaAlt: "Tree Gamification",\n      imagePath: "/images/En-Trees.png",'
)
# In ZH:
content = content.replace(
    'mediaAlt: "種樹遊戲化",\n      imagePath: "",',
    'mediaAlt: "種樹遊戲化",\n      imagePath: "/images/Zh-Trees.png",'
)

with open("/Users/alber/Dev/FN/fnwebsite/src/lib/site-copy.ts", "w") as f:
    f.write(content)

print("Done")
