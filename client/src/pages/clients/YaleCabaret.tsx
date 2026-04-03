import { ClientLayout } from '@/components/layout/ClientLayout';
import { motion } from 'framer-motion';
import { usePageTitle } from '@/hooks/usePageTitle';

const galleryImages = [
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/IMG_6693_lxecbi.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/IMG_6692_vbjg9n.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/IMG_6691_itjvcb.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367067/IMG_6686_g34osh.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367067/IMG_6685_kvrlxo.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/IMG_6689_lptzsr.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/55.drag-square_EDIT_-03_f5knsa.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367067/IMG_6687_ujhq2n.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367067/IMG_6690_kgvxtw.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1680367066/IMG_6694_lkejvr.png",
  "https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750740554/Yale%20Cabaret/IMG_0536_qi4z2r.jpg",
];

export default function YaleCabaret() {
  usePageTitle("Yale Cabaret");
  return (
    <ClientLayout>
      <motion.img
        src="https://res.cloudinary.com/dwi8ov4xq/image/upload/f_auto,q_auto/v1750697730/Home/Logos/Cab55-Logo-MAIN_kjmrfr.png"
        alt="Yale Cabaret 55: Parachute"
        className="w-80 h-auto object-contain mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Yale Cabaret
      </motion.h1>

      <motion.div
        className="w-0.5 h-12 bg-black mx-auto mb-12"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ originY: 0 }}
      />

      <div className="space-y-6">
        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          During the 2022–2023 season, our founder Kayodè Soyemi served as Co-Producing Artistic Director for Yale Cabaret's 55th season, themed Parachute. It was the first all-Black leadership team in the Cabaret's history, and the first full return to in-person operations since the pandemic.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          The season included 11 fully produced shows, a revived partnership with local restaurant Anchor Spa, a redesigned beverage program, and the launch of Cab Labs — a new development workshop series. We brought in local drag artists for the annual Dragaret, upgraded the space, and introduced new guest artist programs to expand access and impact.
        </motion.p>

        <motion.p
          className="font-sans text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Attendance went up. Community showed up. A lot of what we built that year is still in use today.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
      >
        {galleryImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Yale Cabaret Season 55 — image ${i + 1}`}
            className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </motion.div>
    </ClientLayout>
  );
}
