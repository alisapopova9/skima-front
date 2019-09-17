import React, { Component } from 'react';
import {InputFormRow} from "../../auth/InputFormRow";
import ifrStyle from "../../auth/inputFormRow.module.css";
import style from "./newMarathonForm.module.css"
import buttonStyle from "../../../defaultStyles/buttons.module.css";
import inputStyle from "../../../defaultStyles/input.module.css";
import {DynamicSprintsBox} from "../../utils/dynamicInputBox/DynamicSprintsBox";

export class NewMarathonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            sprints: [],
        }
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    onDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        });
    };

    sprintInputHandler = (event, index) => {
      this.state.sprints[index] = event.target.value;
      this.setState({
          sprints: this.state.sprints,
      });
    };

    onAddSprintClick = (event) => {
        event.preventDefault();
        this.setState({
            sprints: [...this.state.sprints, ''],
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                'title': this.state.title,
                'description': this.state.description,
            })
        };
        fetch("/api/marathons", options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error(`Запрос завершился неуспешно ${response.status} ${response.statusText}`);
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
      return(
          <div className={style.container}>
              <div className={style.content}>
                  <h1>Создать новый марафон</h1>
                  <div>
                      Заполни все поля и становись автором своего собственного марафона!
                  </div>
                  <hr/>
                  <form className={style.loginContainer}>
                      <div className={style.formContainer}>
                          <div className={style.inputContainer}>
                              <InputFormRow id="marathon-name" label="Название" flag="input" onChange={this.onTitleChange} />
                              <InputFormRow id="marathon-description" label="Описание" flag="area" onChange={this.onDescriptionChange} />
                              <DynamicSprintsBox title="Добавляем спринты" boxHandler={this.sprintInputHandler}/>
                              {/*<div>*/}
                                  {/*{*/}
                                      {/*this.state.sprints.map((sprint, index) => {*/}
                                          {/*return (*/}
                                              {/*<div key={index}>*/}
                                                  {/*<input onInput={(event) => this.sprintInputHandler(event, index)} className={inputStyle.defaultInput} type="text"/>*/}
                                              {/*</div>*/}
                                          {/*)*/}
                                      {/*})*/}
                                  {/*}*/}
                                  {/*<button onClick={this.onAddSprintClick} className={buttonStyle.defaultButton}>Добавить спринт</button>*/}
                              {/*</div>*/}
                          </div>
                          <div className={style.buttonBox}>
                              <button onSubmit={this.onFormSubmit} className={buttonStyle.defaultButton}>Создать марафон</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      )
    }
}