import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './activities.module.css';

export class Activities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activitiesList: [],
        }
    }

    componentDidMount() {
        const patchOptions = {
            method: "PATCH",
        };

        fetch('https://www.skima.cf/v1/auth/tokens/', patchOptions)
            .then(response => {
               if (response.ok) {
                   return response.json();
               }
            })
            .then(response => {
                localStorage.setItem('token', response.accessToken);
            }) ;

        const options = {
            method: "GET",
            headers: {
                "Authorization": "Bearer" + ' ' + localStorage.getItem('token'),
            }
        };

        fetch('https://www.skima.cf/v1/activities/', options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response => {
                this.setState({
                    activitiesList: response,
                });
            })
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