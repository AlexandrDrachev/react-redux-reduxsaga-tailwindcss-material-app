import React, { useState, useRef } from 'react';

import ImageEditor from '@toast-ui/react-image-editor';
import download from 'downloadjs';
import 'tui-image-editor/dist/tui-image-editor.css';

const MemeGen = () => {

  const [imageSrc, setImageSrc] = useState("");
  const imageEditor = useRef();

  const saveImageToDisk = () => {
    const imageEditorInst = imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    if (data) {
      const mimeType = data.split(';')[0];
      const extension = data.split(';')[0].split('/')[1];
      download(data, `image.${extension}`, mimeType);
    }
  };

  const myTheme = {
    'menu.backgroundColor': 'white',
    'common.backgroundColor': '#151515',
    'downloadButton.backgroundColor': 'white',
    'downloadButton.borderColor': 'white',
    'downloadButton.color': 'black',
    // "menu.normalIcon.path": icond,
    // "menu.activeIcon.path": iconb,
    // "menu.disabledIcon.path": icona,
    // "menu.hoverIcon.path": iconc,
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-20">
      <div className="w-full flex flex-col justify-center items-center text-white">
        <h1>Photo Editor</h1>
        <div
          className=""
          onClick={saveImageToDisk}>
          Save Image to Disk
        </div>
      </div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: imageSrc,
            name: 'image',
          },
          theme: myTheme,
          menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'text', 'filter'],
          initMenu: '',
          uiSize: {
            height: `calc(100vh - 160px)`,
            width: '100%',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        ref={imageEditor}
      />
    </div>
  );
};

export default MemeGen;
