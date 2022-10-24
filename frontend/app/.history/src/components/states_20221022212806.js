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
        <Card 
            key={i}
            bg="light"
            text="dark"
            className="text-center"
            style={{margin: "10px"}}>
          <Card.Img src={data.imgLink} alt="Card Image" style={{opacity: 0.5}}/>
          <Card.ImgOverlay>
          <Card.Body>
            <Card.Title style={{fontWeight:"bold", fontSize: "20px"}}> {data.name} </Card.Title>
            <Card.Text style={{fontSize: "20px"}}> Policies: {data.policy} </Card.Text>
            <Card.Text style={{fontSize: "20px"}}> Number of Facilities: {data.numFacilities} </Card.Text>
            <Card.Text style={{fontSize: "20px"}}> Percentage of Pregnancies Aborted: {data.percentAborted} </Card.Text>
            <Card.Text style={{fontSize: "20px"}}> Total Abortions in Past Year: {data.totalAbortion} </Card.Text>
          </Card.Body>
          </Card.ImgOverlay>
            </Card>
      );
    });

return (
<div>
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