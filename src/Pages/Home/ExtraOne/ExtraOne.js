import React  from 'react';
import { Accordion} from 'react-bootstrap';

const ExtraOne = () => {

    return (
        <div>
              <div>  
            <h2  className='text-dark m-5 '  >What Makes <span style={{backgroundColor:"cadetblue"}} className=" text-white p-1 rounded " > Our Menus </span> Special ?</h2> 
              <div className='row m-5  ' >
                 <div className='col-md-6 ' >
                   <img  className='img-fluid img-thumbnail'  src="https://i.ibb.co/PFf8Qy5/img-1-600x.jpg" alt="" />
                  
               </div> 
                 
                  <div className='col-md-6 mt-5 pt-2 ' >
                  <Accordion className="mt-5" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Pure Ingredients</Accordion.Header>
                    <Accordion.Body>
                    100% Pure devotees already know that 100% Pure products are absolutely the healthiest and always without synthetic chemicals, artificial colorants, perfumes, chemical preservatives or any other toxins.  But even the most passionate 100% Pure fans may not know that we even go a step further and don’t use fillers either.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Sustainability</Accordion.Header>
                    <Accordion.Body>
                    Sustainable eating involves selecting foods that are healthy for our bodies and the environment. This means foods that provide a balanced diet for the body but also facilitate the conservation of the environmen
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> Environmentalism </Accordion.Header>
                    <Accordion.Body>
                    The food environment concept shows us that the choices we make about food are, to a significant degree,  shaped by the contexts within which they are made. Following from that is the recognition that the most effective and equitable way to change food behaviours is to change the structural factors that drive food choice
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Formula Transparency</Accordion.Header>
                    <Accordion.Body>
                    “Customers want transparency.” When someone like Walter Robb, co-CEO of Whole Foods Market, says that, food and beverage processors listen.
                    But what exactly does he (and his customers) mean? What is transparency? It’s one of those means-different-things-to-different-people issues. It certainly includes a clean and clear label. A clean label typically means foods with fewer ingredients, preservatives or artificial flavors, colors or sweeteners. Consumers also crave authentic, ethical, simpler alternatives to conventional fast-and-mass production processes. Transparency in the food chain involves many different domains
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                  </div>
              </div>
        </div>
        </div>
    );
};

export default ExtraOne;