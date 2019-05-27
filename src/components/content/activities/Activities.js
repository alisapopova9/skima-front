import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './activities.module.css';
import buttonStyle from '../../../defaultStyles/buttons.module.css';

export class Activities extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /*
        * тут будет запрос ко всем марафонам
        * */
    }

    render() {
        return (
          <div className={style.container}>
              <div className={style.marathonContainer}>
                  <Link to="/activities/1" className={style.marathon}>
                      Первый марафон
                  </Link>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
                  <div className={style.marathon}>
                      Второй марафон
                  </div>
              </div>
          </div>
        );
    }
}