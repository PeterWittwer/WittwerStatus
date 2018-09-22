import React, { Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    
    //THIS WILL BE PLACED IN REDUX SATE LOCATED IN A REDUCER FILE
    // constructor(props) {
    //     super(props);
    //         this.state = {
    //             items: [
    //                 { id: uuid(), name: "Eggs" },
    //                 { id: uuid(), name: "Milk" },
    //                 { id: uuid(), name: "Steak" },
    //                 { id: uuid(), name: "Water" },
    //             ]
    //         };
    //   }

    componentDidMount() {
        this.props.getItems();
      }

    render() {
       // const { items } = this.state;
       const { items } = this.props.item;
        

        return(
            <Container>
                <Button color="dark" style={{ marginBottom: '2rem'}}
                onClick={() =>{
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }));
                    }
                }} 

                > Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button   
                                    className="remove-btn mr-3" color="danger" size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                          items: state.items.filter(item => item.id !== id)   
                                        }));
                                    }}
                                    >
                                    &times; 
                                    </Button>
                                    {name} 
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
 
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

// item is the name of the item in the index.js reducer file
const mapStateToProps = (state) => ({
    item: state.item 
})
 
// const mapDispatchToProps = (dispatch) => ({
//     getItems: () => dispatch({ type: 'ROLL_DICE' })
// });

export default connect(mapStateToProps, { getItems }) (ShoppingList); 