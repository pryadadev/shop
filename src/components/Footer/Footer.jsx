import React from "react";
import "./Footer.css";
import {ReactComponent as YoutubeIcon} from "svg/youtube.svg";
import {ReactComponent as VkIcon} from "svg/vk.svg";
import {ReactComponent as TelegramIcon} from "svg/telegram.svg";
import {ReactComponent as TiktokIcon} from "svg/tiktok.svg";
import {ReactComponent as DzenIcon} from "svg/dzen.svg";
import {ReactComponent as ArrowDown} from "svg/arrow-down.svg";
import {ReactComponent as IconMir} from "svg/mir.svg";
import {ReactComponent as IconMastercard} from "svg/mastercard.svg";
import {ReactComponent as IconVisa} from "svg/visa.svg";
import {ReactComponent as IconUnionpay} from "svg/unionpay.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
      <section className="email-subscription">
        <h2 className="email-subscription-header montserrat">
          Подписка на новости и акции
        </h2>
        <input
          type="text"
          className="email-subscription-input"
          placeholder="Мой e-mail"
        />
        <div className="email-subscription-button montserrat">
          Подписаться
        </div>
      </section>
      <div className="footer-separator"></div>
      <section className="contacts">
        <h1 className="contacts-header montserrat">Контакты</h1>
        <div className="contacts-address">Адреса магазинов</div>
        <div className="phone-location-box">
          <div className="phone-number montserrat">+7 (495) XXX-XX-XX</div>
          <div className="city">
            <span>Москва</span>
            <span className="city-arrow"><ArrowDown/></span>
          </div>
        </div>
        <div className="contacts-button montserrat">Задать вопрос</div>
        <div className="contacts-social">
          <YoutubeIcon className="contacts-social-item"/>
          <VkIcon className="contacts-social-item"/>
          <TelegramIcon className="contacts-social-item"/>
          <TiktokIcon className="contacts-social-item"/>
          <DzenIcon className="contacts-social-item"/>
        </div>
      </section>
      <div className="footer-separator"></div>
      <section className="legal">
        <div className="legal-name montserrat">
          © ByteWave, 2023
        </div>
        <div className="legal-partners">
          <IconMir className="legal-partners-item"/>
          <IconMastercard className="legal-partners-item"/>
          <IconVisa className="legal-partners-item"/>
          <IconUnionpay className="legal-partners-item"/>
        </div>
        <div className="legal-policy">
          Политика обработки персональных данных
        </div>
      </section>
      </div>
    </footer>
  );
};

export default Footer;