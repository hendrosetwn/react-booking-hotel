import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/header.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { useState } from "react";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list">
          <div className="header__list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="header__list__item active">
            <FontAwesomeIcon icon={faPlane} />
            <span>flights</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>car rentals</span>
          </div>
          <div className="header__list__item">
            <FontAwesomeIcon icon={faBed} />
            <span>attractions</span>
          </div>
        </div>

        <h2 className="header__title">A lifetime of discount? It's Genius</h2>
        <p className="header__desc">
          Get rewarded for your travels - unlock instan saving of 10% or more
          with a free Booking App Account
        </p>
        <button className="header__btn">Signin / Register</button>

        <div className="header-search">
          <div className="header-search__item">
            <FontAwesomeIcon icon={faBed} className="header-search__icon" />
            <input
              type="text"
              className="header-search__input"
              placeholder="Where are you going?"
            />
          </div>
          <div className="header-search__item">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="header-search__icon"
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="header-search__text"
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")} -
                ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>
            {openDate ? (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="header-search__date"
              />
            ) : null}
          </div>
          <div className="header-search__item">
            <FontAwesomeIcon icon={faPerson} className="header-search__icon" />
            <span
              onClick={() => setOpenOption(!openOption)}
              className="header-search__text"
            >
              {`${options.adult} adult, ${options.children} children, ${options.room} room`}
            </span>
            {openOption ? (
              <div className="header-search__option">
                <div className="header-search__option--item">
                  <span className="header-search__option--text">Adult</span>
                  <div className="header-search__option--content">
                    <button className="header-search__option--btn">-</button>
                    <span className="header-search__option--value">0</span>
                    <button className="header-search__option--btn">+</button>
                  </div>
                </div>
                <div className="header-search__option--item">
                  <span className="header-search__option--text">Children</span>
                  <div className="header-search__option--content">
                    <button className="header-search__option--btn">-</button>
                    <span className="header-search__option--value">0</span>
                    <button className="header-search__option--btn">+</button>
                  </div>
                </div>
                <div className="header-search__option--item">
                  <span className="header-search__option--text">Room</span>
                  <div className="header-search__option--content">
                    <button className="header-search__option--btn">-</button>
                    <span className="header-search__option--value">0</span>
                    <button className="header-search__option--btn">+</button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
