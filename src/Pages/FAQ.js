import React from 'react';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import question from '../Assests/question.png'

const FAQ = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
            <img className='w-50 rounded-circle' src={question} alt="" />
            </div>

            <h3 className='my-5 text-center'>You may want to know:</h3>
         <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will I continue to have access to the course even after I complete it?</Accordion.Header>
        <Accordion.Body>
        Yes. You will continue to have access to the course after you complete it, provided that your account’s in good standing, and we continue to have a license to the course. So, if you wish to review specific content in the course after you finish it
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Where can I see the status of my refund?</Accordion.Header>
        <Accordion.Body>
        You can see the status of your refund in the Refunds section of your Purchase History page.  In the Refund Status column you can see the date your refund request was submitted or when it was processed.

The amount of your refund and the payment type it was refunded to is also included.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>When will I receive my refund?</Accordion.Header>
        <Accordion.Body>
        Refund requests are submitted immediately to your payment processor or financial institution after we have received and processed your request. It may take  5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.

If you requested a refund within 24 hours of purchasing the course, however, it may be processed as a purchase reversal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Where can I go for help?</Accordion.Header>
        <Accordion.Body>
        If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 

Our Help Center has extensive information regarding our various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <h5 className='my-5'>Still have a question? Feel free to write to us anytime.<br></br><Link to='/message'><Button className='mt-5' variant='outline-dark'>Message Us!</Button></Link></h5>
        </div>
    );
};

export default FAQ;<h2>faq here</h2>