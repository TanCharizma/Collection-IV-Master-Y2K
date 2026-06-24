/**
 * CLIENT CONFIGURATION
 * Update this object for each new client. Variables here automatically 
 * populate the navigation, footer, and booking page links.
 */
window.CLIENT_CONFIG = {
    // 1. Basic Info
    name: "CLIENT NAME",
    email: "contact@client.com",
    
    // 2. Roles / Taglines
    taglineEn: "Model <span class=\"pink-accent\">·</span> Creative Director",
    taglineTh: "นางแบบ <span class=\"pink-accent\">·</span> ครีเอทีฟไดเรกเตอร์",

    // 3. About / Footer Short Description
    footerDescEn: "International model and creative director based in Bangkok, specializing in high-end editorial and commercial campaigns.",
    footerDescTh: "นางแบบและครีเอทีฟไดเรกเตอร์ระดับนานาชาติที่ประจำอยู่ในกรุงเทพฯ เชี่ยวชาญด้านงานถ่ายแบบนิตยสารและโฆษณาระดับไฮเอนด์",

    // 3.5 About Page Copy
    // Replace these paragraphs for each buyer. Add or remove lines as needed.
    aboutBioEn: [
        "A sharp, image-led portfolio for models and creatives with a distinct visual point of view.",
        "Replace this demo biography with the client’s background, markets, experience, and creative direction.",
        "Keep the copy concise, confident, and useful for agencies, brands, and direct bookings."
    ],
    aboutBioTh: [
        "พอร์ตโฟลิโอที่เน้นภาพลักษณ์ชัดเจน สำหรับนางแบบและครีเอทีฟที่มีมุมมองเฉพาะตัว",
        "แทนที่ตัวอย่างนี้ด้วยประวัติของลูกค้า ตลาดที่ทำงาน ประสบการณ์ และแนวทางครีเอทีฟ",
        "เขียนให้กระชับ มั่นใจ และเป็นประโยชน์สำหรับเอเจนซี่ แบรนด์ และการจองโดยตรง"
    ],
    manifestoEn: "[Client manifesto placeholder. Replace with a short line that captures their presence, process, or point of view.]",
    manifestoTh: "[พื้นที่ตัวอย่างสำหรับแนวคิดของลูกค้า ใส่ประโยคสั้นๆ ที่สะท้อนตัวตน วิธีทำงาน หรือมุมมอง]",

    // 4. Measurements
    measurements: {
        height: "179",
        bust: "84",
        waist: "61",
        hips: "90",
        shoes: "40",
        hairEn: "Blonde",
        hairTh: "บลอนด์",
        eyesEn: "Blue",
        eyesTh: "สีฟ้า"
    },

    // 5. Comp Card
    compCardUrl: "image/Folio-Lab-Compcard Y2K.webp", // Example: "image/Folio-Lab-Compcard Y2K.webp" (leave blank "" to hide button)
    compCardDownloadUrl: "image/Folio-Lab-Compcard Y2K.png", // Example: "image/Folio-Lab-Compcard Y2K.png"

    // 6. Image Modal Captions
    // Set showImageCaptions to false to hide captions and the caption toggle everywhere.
    // Delete or leave a specific image entry blank if that image should not show captions.
    showImageCaptions: true,
    imageCaptions: {
        "image/highlights/01.webp": {
            kicker: "Highlights / 01",
            en: "A high-gloss Y2K frame built around attitude, color, and digital-era presence.",
            th: "ภาพสไตล์ Y2K เงาวาวที่เน้นท่าที สีสัน และพลังของยุคดิจิทัล."
        },
        "image/highlights/02.webp": {
            kicker: "Highlights / 02",
            en: "Playful polish with a sharp portfolio rhythm.",
            th: "ความสนุกที่ยังดูเนี้ยบ พร้อมจังหวะพอร์ตโฟลิโอที่คมชัด."
        },
        "image/highlights/03.WEBP": {
            kicker: "Highlights / 03",
            en: "A confident visual moment with nostalgic-future energy.",
            th: "โมเมนต์ภาพที่มั่นใจ พร้อมพลังแบบอนาคตย้อนยุค."
        },
        "image/highlights/04.webp": {
            kicker: "Highlights / 04",
            en: "Editorial pop with a glossy, memorable finish.",
            th: "ภาพเอดิทอเรียลที่โดดเด่น เงาวาว และน่าจดจำ."
        },
        "image/portfolio/01.webp": {
            kicker: "Portfolio / 01",
            en: "Client image caption placeholder. Replace this with campaign, styling, photographer, or location details.",
            th: "ตัวอย่างคำบรรยายภาพ ลูกค้าสามารถใส่รายละเอียดแคมเปญ สไตลิ่ง ช่างภาพ หรือสถานที่ได้ที่นี่."
        },
        "image/portfolio/02.webp": {
            kicker: "Portfolio / 02",
            en: "Client image caption placeholder. Keep it punchy, editorial, and useful.",
            th: "ตัวอย่างคำบรรยายภาพ ควรเขียนให้กระชับ มีสไตล์ และช่วยเล่าเรื่องภาพ."
        },
        "image/portfolio/03.webp": {
            kicker: "Portfolio / 03",
            en: "Client image caption placeholder for credits or image context.",
            th: "ตัวอย่างคำบรรยายภาพสำหรับเครดิตหรือบริบทของภาพ."
        },
        "image/portfolio/04.webp": {
            kicker: "Portfolio / 04",
            en: "Client image caption placeholder for concept, wardrobe, or publication notes.",
            th: "ตัวอย่างคำบรรยายภาพสำหรับคอนเซปต์ เสื้อผ้า หรือรายละเอียดการเผยแพร่."
        }
    },

    // 7. Links (Leave blank "" to automatically hide the button on the booking page)
    instagram: "https://instagram.com/yourclient",
    line: "https://line.me/",
    whatsapp: "https://wa.me/1234567890"
};
