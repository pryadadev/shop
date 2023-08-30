import React from 'react';
import './SideMenuFooter.css';
import {ReactComponent as YoutubeIcon} from 'svg/youtube.svg';
import {ReactComponent as VkIcon} from 'svg/vk.svg';
import {ReactComponent as TelegramIcon} from 'svg/telegram.svg';
import {ReactComponent as TiktokIcon} from 'svg/tiktok.svg';
import {ReactComponent as DzenIcon} from 'svg/dzen.svg';

const SideMenuFooter = () => {
    return (
        <div className="side-menu-catalog side-menu-footer">
            {/* Большая кнопка "Задать вопрос" */}
            <div className="side-menu-footer-ask-button montserrat">
                Задать вопрос
            </div>

            {/* Иконки соцсетей в flexbox'е с возможностью переноса */}
            <div className="side-menu-footer-social">
                <YoutubeIcon className="side-menu-footer-social-item"/>
                <VkIcon className="side-menu-footer-social-item"/>
                <TelegramIcon className="side-menu-footer-social-item"/>
                <TiktokIcon className="side-menu-footer-social-item"/>
                <DzenIcon className="side-menu-footer-social-item"/>
            </div>

        </div>
    );
};

export default SideMenuFooter;