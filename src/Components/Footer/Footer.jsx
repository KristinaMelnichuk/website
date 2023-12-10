import './Footer.css';

const Footer = () => {
    return (
        <div className="Contact-information">
            <ul className="list-contacts"><b>Контактная информация:</b>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=79869101969&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0">WhatsApp</a>
                </li>
                <li>
                    <a href="https://t.me/montecristo_ru">Telegram</a>
                </li>
                <li>
                    <a href="https://vk.com/montecristo_ru">VKontakte</a>
                </li>
                <li>
                    <a href="#s">Instagram: instagram.com/montecristo.ru</a>
                </li>
                <li><a href="#s">Менеджер (ОПТ) +7-906-332-15-71</a></li>
            </ul>
            <ul className="list-working-hours">Часы работы:
                <li>Пн-Пт
                    10:00–20:00</li>
                <li>СБ
                    10:00–20:00</li>
                <li>Вск
                    10:00–19:00</li>
            </ul>
            <ul className="store-addresses">
                <ul className="naberezhnye-chelny">Набережные Челны
                    <li>Тц Кентавр (Шамиля Усманова 17А)</li>
                    <li>Тц Арзан (Сергея Титова, 36)</li>
                    <li>Тц Одежда (1-ый комплекс, 10)</li>
                </ul>
                <ul className="Nizhnekamsk">Нижнекамск
                    <li>Тц Олимп (Баки Урманче, 15)</li>
                    <li>Тц XL (Проспект Вахитова, 30)</li>
                </ul>
                <div className="yelabuga-almetyevsk">
                    <ul>Елабуга
                        <li>Проспект Нефтяников, 9</li>
                    </ul>
                    <ul>Альметевск
                        <li>Тц Каньон (Гафиатуллина, 20)</li>
                    </ul>
                </div>
            </ul>
        </div>
    );
}

export default Footer;
