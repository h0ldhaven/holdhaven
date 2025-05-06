import React from 'react';
import { IconType } from 'react-icons';
import { useTheme } from '../../hooks/useTheme';

interface SwitchButtonProps {
    firstIcon?: IconType;
    secondIcon?: IconType;
}

const SwitchButton: React.FC<SwitchButtonProps> = (props) => {
    const { firstIcon: FirstIcon, secondIcon: SecondIcon } = props;
    const { theme, toggleTheme } = useTheme();

    return(
        <div className={`app ${theme}`}>
            {/* Switch Container */}
            <label htmlFor='theme-switch' className='absolute left-1/100 top-5/100 flex items-center cursor-pointer'>
                {/* Hidden Checkbox */}
                <input
                    id='theme-switch'
                    type='checkbox'
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    className='hidden'
                />
                
                {/* Background of Switch */}
                <div
                    className={`w-16 h-8 rounded-full ${theme === 'dark' ? 'bg-blue-400' : 'bg-yellow-500'} transition-colors duration-300`}
                ></div>

                {/* Circle inside the switch */}
                <div
                    className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                        theme === 'dark' ? 'transform translate-x-9' : 'translate-x-1'
                    } flex items-center justify-center`}
                >
                    {/* FontAwesome Icons for Sun and Moon */}
                    {theme === 'dark' ? (
                        // <i className='fas fa-moon text-white'></i>
                        FirstIcon ? 
                            <FirstIcon 
                                size={16}
                                className='text-blue-400' 
                            />
                            : null
                    ) : (
                        // <i className='fas fa-sun text-yellow-500'></i>
                        SecondIcon ? 
                            <SecondIcon 
                                size={16}
                                className='text-yellow-500'
                            />
                            : null
                    )}
                </div>
            
            </label>
        </div>
    );
};

export default SwitchButton;