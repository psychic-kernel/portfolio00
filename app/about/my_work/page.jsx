'use-client'
import { motion, useTransform, useScroll } from "framer-motion";

// import { useRef } from "react";
const MyWork = () => {
    return (
        <main>
           <img src="/assets/crud_forms.png" alt="Figma Design"/>
           <img src="/assets/dashboard-emails-appsmodal.png" alt="Figma Design"/>
           <img src="/assets/dashboard-prototype.png" alt="Figma Design"/>
           <img src="/assets/dashboard-timer.png" alt="Figma Design"/>

      

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>

    
           
        </main>
    );
}; export default MyWork;