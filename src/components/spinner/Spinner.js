import React from 'react';

const Spinner = () => {

    return (
        <div className={`w-screen h-screen relative overflow-hidden`}>
            <div className={`z-100 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center `}>
                <div className={`
                w-200 h-200 rounded-full font-bold roll-in-blurred-left flex flex-col justify-center
                items-center text-3xl`}
                >
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Spinner;
