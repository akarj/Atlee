import { TransitionLink } from '../../PageTransition';
import React from 'react';

const ModelFooter: React.FC<ModelFooterProps> = ({ redirectText = '', redirectLink }) => {
    const redirectTextArr = redirectText.split('? ');
    if (Array.isArray(redirectTextArr) && redirectTextArr.length < 1) return <></>;
    return (
        <>
            <div className="w-full h-10 text-left text-gray-200 mt-4">
                {redirectTextArr[0]}?&nbsp;
                <TransitionLink to={redirectLink}>
                    <span className="inline-block text-white-200 font-inter">{redirectTextArr[1] && redirectTextArr[1]}</span>&nbsp;
                    <svg
                        fill="#fff"
                        height="16px"
                        width="16px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330"
                        className="inline-block"
                    >
                        <path
                            id="XMLID_27_"
                            d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                     s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                     c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                        />
                    </svg>
                </TransitionLink>
            </div>
        </>
    );
};

export default ModelFooter;
