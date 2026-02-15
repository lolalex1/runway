import React from 'react'
import { motion } from "framer-motion"

import Person from '@/components/person'

export default function People() {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-2">
                <motion.div
                    layout
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <Person name="Alex" role="Owner" color='purple' image='https://cdn.discordapp.com/attachments/880079248239493191/1466761341216755784/IMG_1345.png?ex=697deb72&is=697c99f2&hm=f75e2cd884f5731cfaf2aafd028bff16e5d062bee89d7a934c8b616b6a0a935b&' segmentsCount={12} />
                </motion.div>
                <motion.div
                    layout
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <Person name="Patricia" role="Manager" color='green' image='https://cdn.discordapp.com/attachments/880079248239493191/1466761176032743435/lp_image.jpg?ex=697deb4b&is=697c99cb&hm=e3665770894dab10338a7004b11cf49c36dfef01cdbcfc1102f0c672302bfd53&' segmentsCount={8} />
                </motion.div>
            </div>
        </>
    )
}
