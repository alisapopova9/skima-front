import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './accordionSection.module.css';

export class AccordionSection extends Component {
    static propTypes ={
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label }
        } = this;

        return (
          <div className={isOpen ? style.openedSection : style.sectionContainer }>
              <div className={style.section} onClick={onClick}>
                  {label}
                  <div className={style.arrowContainer}>
                      {!isOpen && <span>&#9650;</span>}
                      {isOpen && <span>&#9660;</span>}
                  </div>
              </div>
              {isOpen && (
                  <div className={style.sectionContent}>
                      {this.props.children}
                  </div>
              )}
          </div>
        );
    }
}