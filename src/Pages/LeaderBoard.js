import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import Header from '../Components/Header'
// import Footer from '../Components/footer'
import '../Styles/pnf.css'
// images
import User from '../assets/images/usericn.png';
import bdge from '../assets/images/badge.png'
import { StarFill } from 'react-bootstrap-icons'

export default function LeaderBoard() {
  return (
   <React.Fragment>
    <Header/>
      <section>
        <Container>
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>LeaderBoard</h1>
                    </div>
                    <div>
                        <button className='btn-dash-1'>View my </button>
                    </div>
                </div>
              <Col className='bg-white rounded-3 p-5 mt-5'>
              <div className='ledr-btns d-flex justify-content-end'>
                <div className='bordsection'>
                  <button className='mnth'>Month</button>
                  <button className='wek'>Week</button>
                  <button className='altime'>All Time</button>
                </div>
              </div>
                <div className='tp-rnk d-flex justify-content-center'>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Jhone_Doe</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Jhone_Doe</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Jhone_Doe</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  {/* card is over */}

                  {/* lists */}
                </div>
                <div className='listcards'>
                    <div className='listview d-flex justify-content-around mt-5 border-bottom'>
                      <div>
                        <span>User</span>
                      </div>
                      <div>
                        <span>Points</span>
                      </div>
                      <div>
                        <span>Recent Badge</span>
                      </div>
                    </div>
                    <div className='ldr-cardmin'>
                      <div className='ldr-cards'>
                        <div>
                          <span>1St</span>
                        </div>
                            <div>
                          <img src={User} className="avatar"/>
                        </div>
                          <div>
                            <h4>Tomassz Porostowski</h4>
                            <span>Tomcioporo</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </Col>
            </Row>
        </Container>
      </section>
   </React.Fragment>
  
  )
}
