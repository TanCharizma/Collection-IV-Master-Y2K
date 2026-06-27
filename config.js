/**
 * CLIENT CONFIGURATION
 *
 * Fast client swap:
 * 1. Edit the blocks marked SWAP below.
 * 2. Replace files in /image with the same filenames when possible.
 * 3. Leave optional links or comp-card paths blank ("") to hide unavailable UI.
 * 4. Add image captions only for images that should show modal captions.
 *
 * The template reads window.CLIENT_CONFIG. Keep the exported keys at the bottom
 * unless you are also updating main.js/nav.js/footer.js.
 */
(() => {
    const isUrl = (value) => /^https?:\/\//i.test(String(value || "").trim());
    const cleanHandle = (value) => String(value || "").trim().replace(/^@+/, "");
    const digitsOnly = (value) => String(value || "").replace(/[^\d+]/g, "");

    const instagramLink = (value) => {
        const handle = cleanHandle(value);
        if (!handle) return "";
        return isUrl(handle) ? handle : `https://instagram.com/${handle}`;
    };

    const lineLink = (value) => {
        const input = String(value || "").trim();
        if (!input) return "";
        return isUrl(input) ? input : `https://line.me/ti/p/${input.replace(/^@+/, "")}`;
    };

    const whatsappLink = (value) => {
        const input = String(value || "").trim();
        if (!input) return "";
        return isUrl(input) ? input : `https://wa.me/${digitsOnly(input)}`;
    };

    const path = {
        hero: "image/hero/hero.webp",
        about: "image/about/01.webp",
        compCardWeb: "image/Folio-Lab-Compcard Y2K.webp",
        compCardDownload: "image/Folio-Lab-Compcard Y2K.png",
        highlights: [
            "image/highlights/01.webp",
            "image/highlights/02.webp",
            "image/highlights/03.WEBP",
            "image/highlights/04.webp"
        ],
        portfolio: Array.from({ length: 20 }, (_, index) => {
            const number = String(index + 1).padStart(2, "0");
            return `image/portfolio/${number}.webp`;
        }),
        digitals: [
            "image/digitals/01.webp",
            "image/digitals/02.webp",
            "image/digitals/03.webp",
            "image/digitals/04.webp"
        ]
    };

    // SWAP: client identity, contact, and hero copy.
    const client = {
        name: "CLIENT NAME",
        email: "contact@client.com",
        instagram: "yourclient",
        line: "",
        whatsapp: "1234567890",
        taglineEn: "Model <span class=\"pink-accent\">·</span> Creative Director",
        taglineTh: "นางแบบ <span class=\"pink-accent\">·</span> ครีเอทีฟไดเรกเตอร์",
        splashCaption: "",
        footerDescEn: "International model and creative director based in Bangkok, specializing in high-end editorial and commercial campaigns.",
        footerDescTh: "นางแบบและครีเอทีฟไดเรกเตอร์ระดับนานาชาติที่ประจำอยู่ในกรุงเทพฯ เชี่ยวชาญด้านงานถ่ายแบบนิตยสารและโฆษณาระดับไฮเอนด์"
    };

    // SWAP: About page copy.
    const about = {
        bioEn: [
            "A sharp, image-led portfolio for models and creatives with a distinct visual point of view.",
            "Replace this demo biography with the client’s background, markets, experience, and creative direction.",
            "Keep the copy concise, confident, and useful for agencies, brands, and direct bookings."
        ],
        bioTh: [
            "พอร์ตโฟลิโอที่เน้นภาพลักษณ์ชัดเจน สำหรับนางแบบและครีเอทีฟที่มีมุมมองเฉพาะตัว",
            "แทนที่ตัวอย่างนี้ด้วยประวัติของลูกค้า ตลาดที่ทำงาน ประสบการณ์ และแนวทางครีเอทีฟ",
            "เขียนให้กระชับ มั่นใจ และเป็นประโยชน์สำหรับเอเจนซี่ แบรนด์ และการจองโดยตรง"
        ],
        manifestoEn: "[Client manifesto placeholder. Replace with a short line that captures their presence, process, or point of view.]",
        manifestoTh: "[พื้นที่ตัวอย่างสำหรับแนวคิดของลูกค้า ใส่ประโยคสั้นๆ ที่สะท้อนตัวตน วิธีทำงาน หรือมุมมอง]"
    };

    // SWAP: measurements shown on the homepage.
    const measurements = {
        height: "179",
        bust: "84",
        waist: "61",
        hips: "90",
        shoes: "40",
        hairEn: "Blonde",
        hairTh: "บลอนด์",
        eyesEn: "Blue",
        eyesTh: "สีฟ้า"
    };

    // SWAP: optional comp card.
    const compCard = {
        image: path.compCardWeb,
        download: path.compCardDownload
    };

    // SWAP: modal captions. Remove an entry or set showImageCaptions false to hide it.
    const captions = {
        showImageCaptions: true,
        items: {
            [path.highlights[0]]: {
                kicker: "Highlights / 01",
                en: "A high-gloss Y2K frame built around attitude, color, and digital-era presence.",
                th: "ภาพสไตล์ Y2K เงาวาวที่เน้นท่าที สีสัน และพลังของยุคดิจิทัล."
            },
            [path.highlights[1]]: {
                kicker: "Highlights / 02",
                en: "Playful polish with a sharp portfolio rhythm.",
                th: "ความสนุกที่ยังดูเนี้ยบ พร้อมจังหวะพอร์ตโฟลิโอที่คมชัด."
            },
            [path.highlights[2]]: {
                kicker: "Highlights / 03",
                en: "A confident visual moment with nostalgic-future energy.",
                th: "โมเมนต์ภาพที่มั่นใจ พร้อมพลังแบบอนาคตย้อนยุค."
            },
            [path.highlights[3]]: {
                kicker: "Highlights / 04",
                en: "Editorial pop with a glossy, memorable finish.",
                th: "ภาพเอดิทอเรียลที่โดดเด่น เงาวาว และน่าจดจำ."
            },
            [path.portfolio[0]]: {
                kicker: "Portfolio / 01",
                en: "Client image caption placeholder. Replace this with campaign, styling, photographer, or location details.",
                th: "ตัวอย่างคำบรรยายภาพ ลูกค้าสามารถใส่รายละเอียดแคมเปญ สไตลิ่ง ช่างภาพ หรือสถานที่ได้ที่นี่."
            },
            [path.portfolio[1]]: {
                kicker: "Portfolio / 02",
                en: "Client image caption placeholder. Keep it punchy, editorial, and useful.",
                th: "ตัวอย่างคำบรรยายภาพ ควรเขียนให้กระชับ มีสไตล์ และช่วยเล่าเรื่องภาพ."
            },
            [path.portfolio[2]]: {
                kicker: "Portfolio / 03",
                en: "Client image caption placeholder for credits or image context.",
                th: "ตัวอย่างคำบรรยายภาพสำหรับเครดิตหรือบริบทของภาพ."
            },
            [path.portfolio[3]]: {
                kicker: "Portfolio / 04",
                en: "Client image caption placeholder for concept, wardrobe, or publication notes.",
                th: "ตัวอย่างคำบรรยายภาพสำหรับคอนเซปต์ เสื้อผ้า หรือรายละเอียดการเผยแพร่."
            }
        }
    };

    window.CLIENT_CONFIG = {
        name: client.name,
        email: client.email,
        taglineEn: client.taglineEn,
        taglineTh: client.taglineTh,
        splashCaption: client.splashCaption,
        footerBioEn: client.footerDescEn,
        footerBioTh: client.footerDescTh,
        footerDescEn: client.footerDescEn,
        footerDescTh: client.footerDescTh,
        aboutBioEn: about.bioEn,
        aboutBioTh: about.bioTh,
        manifestoEn: about.manifestoEn,
        manifestoTh: about.manifestoTh,
        measurements,
        compCardUrl: compCard.image,
        compCardDownloadUrl: compCard.download,
        showImageCaptions: captions.showImageCaptions,
        imageCaptions: captions.items,
        instagram: instagramLink(client.instagram),
        line: lineLink(client.line),
        whatsapp: whatsappLink(client.whatsapp),
        client,
        about,
        assets: path,
        compCard,
        captions
    };
})();
