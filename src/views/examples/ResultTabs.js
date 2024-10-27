import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footers/DarkFooter";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";
import '../../App.css';

import HospitalAccordian from "./Sections/Accordian/HospitalAccordian";
import FlightAccordian from "./Sections/Accordian/FlightAccordian";
import HotelAccordian from "./Sections/Accordian/HotelAccordian";

function ResultTabs() {
  const [iconPills, setIconPills] = useState("1");
  const [selectedItems, setSelectedItems] = useState({
    hospital: false,
    flight: false,
    hotel: false,
  });
  
  const navigate = useNavigate();

  const handleNextClick = () => {
    // const { hospital, flight, hotel } = selectedItems;
    navigate('/report');
  
  };

  return (
    <>
      <IndexNavbar/>
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")",
            opacity: 1.8,
            filter: "brightness(0.3)"
          }}
        ></div>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Row>
            <Col md="12" xl="100">
              <Card style={{ maxWidth: '1500px', width: '100%', backgroundColor: '#28282B' }}>
                <CardHeader><br/>
                  <p>Select your Preferences</p>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        onClick={(e) => { e.preventDefault(); setIconPills("1"); }}
                      >
                        <i className="now-ui-icons media-2_sound-wave"></i>
                        Hospitals
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        onClick={(e) => { e.preventDefault(); setIconPills("2"); }}
                      >
                        <i className="now-ui-icons transportation_air-baloon"></i>
                        Flight
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        onClick={(e) => { e.preventDefault(); setIconPills("3"); }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Hotels
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"iconPills" + iconPills}>
                    <TabPane tabId="iconPills1">
                      <HospitalAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, hospital: isChecked }))} />
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <FlightAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, flight: isChecked }))} />
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <HotelAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, hotel: isChecked }))} />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Button
            color="secondary"
            onClick={handleNextClick}
            style={{
              marginTop: '20px', // Space between card and button
              padding: '10px 20px',
              backgroundColor: '#6CB4EE',
              color: 'black',
              alignSelf: 'center', // Centers button in the flex container
            }}
          >
            Generate AI Results
          </Button>
        </Container>
        
     
         
      
      </div>
      <Footer/>
    </>
  );
}

export default ResultTabs;
