import React from "react";
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

function Report() {
  const navigate = useNavigate();

  const downloadPDF = () => {
    // Function to download the PDF
    const link = document.createElement("a");
    link.href = "/path/to/your/report.pdf"; // Replace with your actual PDF path
    link.setAttribute("download", "report.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bookMyPlan = () => {
    // Function to handle the booking action
    alert("Your plan has been booked!"); // Replace with your booking logic
  };

  const handlePrev = () => {
    navigate("/results"); // Navigate to /results
  };

  const handleNext = () => {
    navigate("/signup-page"); // Navigate to /signup
  };

  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")",
            opacity: 1.8,
            filter: "brightness(0.3)"
          }}
        ></div>
        <br/>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          <Row className="justify-content-center">
            <Col md="12">
              <Card style={{ maxWidth: '1500px', width: '100%', backgroundColor: '#28282B' }}>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink className="active">
                        <i className="now-ui-icons files_paper"></i>
                        Report
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab="iconPills1">
                    <TabPane tabId="iconPills1">
                      <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                        <iframe
                          src="https://drive.google.com/file/d/1gILX2ic5aqUPtQgZMmBybQyB0JIsTTBe/preview"
                          width="400" // Decreased width for smaller screens
                          height="300"
                          style={{ border: 'none', marginBottom: '20px' }} // Margin to create space between iframe and buttons
                          title="PDF Report"
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Button color="failure" onClick={downloadPDF} style={{ padding: '10px 20px', marginBottom: '10px' }}>
                            Download Report
                          </Button>
                          <Button color="primary" onClick={bookMyPlan} style={{ padding: '10px 20px' }}>
                            Book My Plan
                          </Button>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Button
            color="secondary"
            onClick={handleNext}
            style={{
              marginTop: '20px', // Space between card and button
              padding: '10px 20px',
              backgroundColor: '#6CB4EE',
              color: 'black',
              alignSelf: 'center', // Centers button in the flex container
            }}
          >
            Finish Setting up your account
          </Button>
        </Container>
{/* 
        <div    >
          <Button color="secondary" onClick={handlePrev} style={{ position: 'absolute',
              bottom: '40px',
              left: '20px',
              backgroundColor: '#6CB4EE', 
              color: 'black' }}>
            Recommendations
          </Button>
          <Button color="secondary" onClick={handleNext} style={{ position: 'absolute',
              bottom: '40px',
              right: '20px',
              backgroundColor: '#6CB4EE', 
              color: 'black' }}>
            Finish account setup 
          </Button>
          </div> */}
       
      </div>
      <Footer />
    </>
  );
}

export default Report;
