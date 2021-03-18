import React, { useState } from 'react';

const CustomCollection = () => {

  const [ test, setTest ] = useState('test');

  return (
    <div>
      <div>
        CustomCollection Component {test}
      </div>
    </div>
  );
};

export default CustomCollection;
