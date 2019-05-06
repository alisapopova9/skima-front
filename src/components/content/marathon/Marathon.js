import React, {Component} from 'react';
import style from './marathon.module.css';
import buttonStyle from '../../../defaultStyles/buttons.module.css';

export class Marathon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            startAt: '',
            endAt: '',
            sprints: '',
        }
    }

    getMarathonName() {
        return '7 дней осознанности';
    }

    getMarathonDescription() {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
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
        ]
    }

    renderSprints() {
        const sprints = this.getMarathonSprints();

        return sprints.map(function (sprint) {
            return (
                <li key={sprint.id} className={style.sprint}>
                    <h4 className={style.sprintName}>{sprint.name}</h4>
                    <div>
                        {sprint.description}
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
          <div className={style.mainContainer}>
              <div className={style.content}>
                  <div className={style.name}>
                      <div className={style.head}>
                        <h1>{this.getMarathonName()}</h1>
                        <button className={buttonStyle.defaultButton}>Участвовать</button>
                      </div>
                      <div>
                          Марафон будет проходить с хх.хх.хххх до уу.уу.уууу
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
                      <ul>
                          {this.renderSprints()}
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
}