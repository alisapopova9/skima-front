import React, {Component} from 'react';
import style from './marathonPage.module.css';
import buttonStyle from '../../../defaultStyles/buttons.module.css';
import { Accordion } from "../../accordion/Accordion";
import {Link} from "react-router-dom";
import jwt_decode from 'jwt-decode';

export class MarathonPage extends Component {
    constructor(props) {
        super(props);

        this.onParticipateClick = this.onParticipateClick.bind(this);

        this.state = {
            name: '',
            descr: '',
            startAt: '',
            endAt: '',
            sprints: [],
            buttonState: 0,
        }
    }

    componentDidMount() {
        const options = {
            method: "GET",
            // headers: {
            //     "Authorization": "Bearer" + ' ' + localStorage.getItem('token'),
            // }
        };

        fetch('/api/marathon', options)
            .then(response =>
                response.json())
            .then(response => {
                this.setState({
                    name: response.title,
                    descr: response.description,
                    sprints: response.sprints,
                })
            });
        // fetch(`https://www.skima.cf/v1/maraphones/5cf61b70f7fa4760136b7f21`, options)
        //     .then(response =>
        //         response.json())
        //     .then(response => {
        //         this.setState({
        //             name: response.title,
        //             descr: response.description,
        //             sprints: response.sprints,
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        //
        // fetch(`https://www.skima.cf/v1/activities/5cf61c15f7fa4760136b7f85`, options)
        //     .then(response => {
        //         if (response.ok) {
        //             console.log(response);
        //             return response.json();
        //         }
        //     })
        //     .then(response => {
        //         this.setState({
        //             startAt: response.startAt,
        //             // endAt: response.endAt,
        //         })
        //     });
    }

    getMarathonName() {
        return this.state.name;
    }

    getActivityStartTime() {
        return this.state.startAt;
    }
    getActivityEndTIme() {
        return this.state.endAt;
    }

    onParticipateClick() {
        const user = localStorage.getItem('token');
        let decoded = jwt_decode(user);

        const options = {
            method: "POST",
            headers: {
                "Authorization": "Bearer" + ' ' + localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body:
                JSON.stringify({
                    'activityId': '5cf61c15f7fa4760136b7f85',
                })
        };

        fetch('https://www.skima.cf/v1/entries', options)
            .then(response => {
                if (response.ok) {
                    this.setState({
                        buttonState: 1,
                    })
                }
            })
    }

    getMarathonDescription() {
        return this.state.descr;
        // return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    }

    getMarathonSprints() {
        return [
            {
                id: 1,
                name: 'Ищем повод для радости',
                description: 'Знаешь ли ты, что вокруг тебя полно интересных вещей, которые заставят тебя улыбнуться? В этом спринте мы научимся искать и находить приятные и необычные мелочи среди, казалось бы, серой бытовухи, чтобы сделать твой день лучше и ярче.',
                tasks: [
                    'Улыбнись себе в зеркале как только проснешься',
                    'Сосчитай всех белочек, которых ты встретишь за сегодняшний день',
                    'Найди облако в форме единорога, если на улице было облачно, а если нет, то найди тень похожей формы',
                    'Опиши цвета, которыми было залито небо на закате',
                    'Посмотри любимый мультфильм перед сном!'
                ],
            },
            {
                id: 2,
                name: 'Ищем повод для гордости',
                description: 'Каждый день должен проходить так, чтобы тебе было за что себя похвалить, подводя его итоги. Этот спринт посвящен выполнению небольших, но очень-очень важных дел, за которые ты определенно сможешь наградить себя шоколадной медалькой :)',
                tasks: [
                    'Распиши свои цели на ближайший день',
                    'Выучи 7 новых слов любого иностранного языка',
                    'Почитай 30 минут книгу, которую постоянно откладывал',
                ]
            },
            {
                id: 3,
                name: 'Ограждаемся от социальных сетей',
                description: 'Задумывался ли ты, сколько времени в день ты тратишь на то, чтобы просто посёрфить в интернете, не вынося ничего полезного? В этом спринте мы будем учиться контролировать время, проведенное в социальных сетях.',
                tasks: [
                    'Не проверяй соц. сети и почту до обеда',
                    'Отключи уведомления',
                    'Не бери телефон после 22:00',
                ]
            },
            {
                id: 4,
                name: 'Наводим порядок',
                description: 'На твоё настроение и продуктивность влияют не только эмоции, которые приносит текущий день, но и мелочи, которые уже успели стать частью ежедневной рутины, и внимание на которые, казалось бы, ты уже не обращаешь. Давай избавимся от всего лишнего в этом спринте!',
                tasks: [
                    'Почисти, наконец, уведомления на почте!',
                    'Убери лишние предметы с рабочего стола',
                    'Отпишись от лишних групп и профилей в соц. сетях',
                ]
            },
            {
                id: 5,
                name: 'Самоанализ',
                description: 'Здесь будет очень крутое описание!',
                tasks: [
                    'Выпиши все свои привычки',
                    'Отметь, какие привычки приносят тебе пользу, а от каких ты хотел бы избавиться',
                    'Отвечай себе на вопрос “Зачем я это делаю?” после каждого принятого решения',
                    'Выпиши свои цели и подумай, что нужно сделать для их осуществления',
                ]
            },
            {
                id: 6,
                name: 'Заряжаемся кислородом',
                description: 'Здесь будет очень крутое описание!',
                tasks: [
                    'Погуляй 40 минут',
                    'Выйди на учебу / работу раньше обычного, чтобы не спеша пройтись',
                    'Пройди 10000 шагов за день',
                ]
            },
            {
                id: 7,
                name: 'Контролируем свои финансы',
                description: 'Здесь будет очень крутое описание!',
                tasks: [
                    'Взвешивай необходимость каждой покупки',
                    'Записывай свою каждую покупку и ее стоимость',
                    'Запиши все “за” и “против” каждой покупки',
                    'Установи и придерживайся максимальной суммы, которую ты планируешь потратить за сегодня'
                ]
            },
        ]
    }

    // getMarathonInfo(id) {
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "Authorization": "Bearer" + ' ' + localStorage.getItem('token'),
    //         }
    //     };
    //
    //     fetch(`https://www.skima.cf/v1/maraphones/${id}`, options)
    //         .then(response =>
    //             response.json())
    //         .then(response => {
    //             // console.log(response);
    //             this.setState({
    //                 name: response.title,
    //                 descr: response.description,
    //                 sprintsArray: response.sprints,
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    renderSprints() {
        let sprints = this.state.sprints;

        return sprints.map(function(sprint) {
            return (
                    <div key={sprint.number} id={sprint.number} label={sprint.name} className={style.sprint}>
                        {/*<h4 className={style.sprintName}>{sprint.name}</h4>*/}
                        <div>
                            {sprint.description}
                        </div>
                    </div>
            );
        })
    }
    renderSprintsAccordion() {
        return (
            <Accordion>
                { this.renderSprints() }
            </Accordion>
        );
    }

    renderParticipationButton() {
        return (
            <button onClick={this.onParticipateClick} className={buttonStyle.defaultButton}>Участвовать</button>
        );
    }

    render() {
        let buttonView =
            this.props.isLogin === true ?
                <button onClick={this.onParticipateClick} className={buttonStyle.defaultButton}>Участвовать</button>
            :
                <Link to={"/login/?back_url=/activities/1"}
                      className={buttonStyle.defaultButton}>Участвовать</Link>;
        return (
          <div className={style.mainContainer}>
              <div className={style.content}>
                  <div className={style.name}>
                      <div className={style.head}>
                        <h1 className={style.nameHeader}>{ this.getMarathonName() }</h1>
                          <div>
                              { buttonView }
                          </div>
                      </div>
                      <div>
                          Марафон будет проходить { this.getActivityStartTime() }
                      </div>
                  </div>
                  <div className={style.description}>
                      <p>
                          {this.getMarathonDescription()}
                      </p>
                  </div>
                  <div className={style.duration}>

                  </div>
                  <div className={style.sprintsContainer}>
                      { this.state.sprints !== [] && this.renderSprintsAccordion() }
                  </div>
              </div>
          </div>
        );
    }
}