import React from 'react';
import { useState } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import {
  X as IconX,
  Square,
  TextCursorInput,
  LayoutPanelTop,
  Circle,
  Box,
  Layers,
  Component,
  Plus,
} from 'lucide-react';

const Card = () => {
    const [open, setOpen] = useState(true);

  return (
    <>
    <AnimatePresence>
    { open&&(
     <motion.div 
     initial = {{opacity:0, scale: 0.98 , filter: "blur(10px)"}}
     animate = {{opacity: 1, scale: 1, filter: "blur(0px)"}}
     exit={{ opacity: 0, scale : 0.98, filter: "blur(10px)"}}
     transiton ={{duration: 0.5, ease: 'easeInOut'}}

     className="w-72 min-h-[26rem] h-[26rem] rounded-xl
      shadow-[0_4px_8px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.2),0_12px_24px_rgba(0,0,0,0.15)]
      px-4 py-6 flex flex-col bg-white text-black items-center">

      <h2 className="text-sm font-bold mb-2">Card</h2>

      <p className="text-neutral-600 mt-2 text-xs text-center">
        Collection of Beautiful UI components
      </p>

      {/* Preview box */}
      <div className="w-full flex-grow bg-neutral-100 rounded-md mt-4 shadow-inner flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 10 , scale: 0.98, filter: "blur(10px)"}}
          whileHover={{opacity: 1, filter: "blur(0px)"}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: easeInOut}}
          className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 p-2 space-y-2 overflow-auto"
        >
          {[
            { icon: <Square size={18} />, label: 'Button' },
            { icon: <TextCursorInput size={18} />, label: 'Input Field' },
            { icon: <LayoutPanelTop size={18} />, label: 'Panel' },
            { icon: <Circle size={18} />, label: 'Circle the earth' },
            { icon: <Box size={18} />, label: 'Cube is box' },
            { icon: <Layers size={18} />, label: 'Layers are in you' },
            { icon: <Component size={18} />, label: 'Component' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-100 p-2 rounded-md shadow-sm"
            >
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}

          {/* Plus icon as last item */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 justify-center bg-gray-200 p-2 rounded-md shadow-sm hover:bg-gray-300 transition cursor-pointer"
          >
            <Plus size={18} className="text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Add More</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Button + X icon */}
      <div className="flex items-center justify-between w-full mt-4">
        <button onClick={()=> setOpen(false)} className="bg-black text-white px-5 py-2 rounded-md text-sm hover:bg-gray-900 transition-all">
          Components
        </button>
        <IconX className="text-black cursor-pointer hover:text-red-500" size={20} />
      </div>
    </motion.div>
    )}
    </AnimatePresence>
    </>
  );
};

export default Card;
