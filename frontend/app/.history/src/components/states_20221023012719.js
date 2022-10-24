import React, {useState, useEffect} from 'react';
import {doc, setDoc, getDocs, collection, startAfter} from "firebase/firestore";
import {db} from './database';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import '../states.css';
import '../App.css';


function States(){
        
    const [searchState, setSearchState]=useState("");
    const [latest, setLatest]=useState([]);
    const [result, setResult]=useState([]);
    useEffect(() => {
        let newArr = [];
        getDocs(collection(db, "policies")).then((states) => {
        states.forEach((state) =>
          newArr.push({
            name: state.id,
            policy: state.data().policy,
            imgLink: state.data().imgLink,
            numFacilities: state.data().noOfFacilities,
            percentAborted: state.data().percentageAborted,
            totalAbortion: state.data().totalAbortion
          })
        );
        console.log(newArr);
        setResult(newArr);
      });
    }, []);
    const filterState= result.filter(item=> {
        return searchState!== "" ? item.name.includes(searchState) : item;
      });


    const states= filterState.map((data, i) => {
        return (
          
        <div class="container cardFull">
            <Card 
            key={i}
            bg="light"
            text="dark"
            className="text-center"
            style={{margin: "10px"}}>
          <Card.Img class="cardImg" src={data.imgLink} alt="Card Image" />
          <Card.ImgOverlay>
          <Card.Body>
            <Card.Title class="cardTitle"> {data.name} </Card.Title>
            <Card.Text class="cardText"> Policies: {data.policy} </Card.Text>
            <Card.Text class="cardText"> Number of Facilities: {data.numFacilities} </Card.Text>
            <Card.Text class="cardText"> Percentage of Pregnancies Aborted: {data.percentAborted} </Card.Text>
            <Card.Text class="cardText"> Total Abortions in Past Year: {data.totalAbortion} </Card.Text>
          </Card.Body>
          </Card.ImgOverlay>
            </Card>
        </div>
        
      );
    });

return (
<div class="container">
<Form className="form">
<Form.Group className="search" controlId="formGroupSearch">
<Form.Control 
type="text" 
placeholder="Search a State" 
onChange={e=> setSearchState(e.target.value)}
/>
</Form.Group>
</Form>
<div className="countries">
      {states};
</div>
</div>
)
};

export default States