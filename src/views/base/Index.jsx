import React from 'react'
import {useState, useEffect} from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import { Link } from 'react-router-dom'
import UseAxios from '../../utils/UseAxios'
import axios from '../../utils/axios'
import apiInstance from '../../utils/axios'
import useAxios from '../../utils/UseAxios'
import sciencea  from '../../assets/images/sciencea.png'
import mathematics5  from '../../assets/images/mathematics5.png'
import setswana from '../../assets/images/setswana.png'
import avatar from '../../assets/images/avatar/avatar.jpg'
import students from '../../assets/images/students.jpg'

function Index() {
    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchCourse = async () => {
        setIsLoading(true); 
        try {
            await axios.get('courses/course-list/').then((res) => {
                console.log("Good");
                console.log(res.data);
                setCourses(res.data);
                setIsLoading(false);
            })

        } catch (error) {
            console.log("BadError");
            console.log(error);
        }
    }
    

    useEffect(() => {
        fetchCourse;
    },[])
        
    /* console.log(courses); */
  
    return (
        <>
            <BaseHeader />

            <section className="py-lg-8 py-5">
                {/* container */}
                <div className="container my-lg-8">
                    {/* row */}
                    <div className="row align-items-center">
                        {/* col */}
                        <div className="col-lg-6 mb-6 mb-lg-0">
                            <div>
                                {/* heading */}
                                <h5 className="text-dark mb-4">
                                    <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2" />
                                    Learn at your Own Pace, and Pass easily with AI behind your Back
                                </h5>
                                <h5 className="text-dark mb-4">
                                    <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2" />
                                    Time and Location is no longer a Barrier
                                </h5>
                                {/* heading */}
                                <h1 className="display-4 fw-bold mb-3">
                                    Botswana's Secondary Schools Education Platform
                                </h1>
                                {/* para */}
                                <p className="pe-lg-10 mb-5">
                                    ALGO-LEARN brings an education platform with over 200 educational videos to cover  
                                    Form One to Form 5 syllabus. It also brings about Artificial Intelligence model for 
                                    answering questions.
                                </p>
                                {/* btn */}
                                <a href="#" className="btn btn-primary fs-4 text-inherit ms-3">
                                    Join Free Now <i className='fas fa-plus'></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=Nfzi7034Kbg"
                                    className="btn btn-outline-success fs-4 text-inherit ms-3"
                                >

                                    Watch Demo <i className='fas fa-video'></i>
                                </a>
                            </div>
                        </div>
                        {/* col */}
                        <div className="col-lg-6 d-flex justify-content-center">
                            {/* images */}
                            <div className="position-relative">
                                <img
                                    src={students}
                                    alt="girl"
                                    className="end-0 bottom-0"
                                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-8">
                <div className="container mb-lg-8">
                    {/* row */}
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-3 border-top-md border-top pb-4  border-end-md">
                            {/* text */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-award fs-2 text-info" />
                                </div>
                                <div className="lh-1">
                                    <h2 className="mb-1">200++</h2>
                                    <span>Teachers & Tutors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 border-top-md border-top border-end-lg">
                            {/* icon */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-users fs-2 text-warning" />
                                </div>
                                {/* text */}
                                <div className="lh-1">
                                    <h2 className="mb-1">1000++</h2>
                                    <span>Course enrolments</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 border-top-lg border-top border-end-md">
                            {/* icon */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-tv fs-2 text-primary" />
                                </div>
                                {/* text */}
                                <div className="lh-1">
                                    <h2 className="mb-1">200++</h2>
                                    <span>Courses to choose from</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 border-top-lg border-top">
                            {/* icon */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-film fs-2 text-success" />
                                </div>
                                {/* text */}
                                <div className="lh-1">
                                    <h2 className="mb-1">500++ </h2>
                                    <span>Online Videos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-5'>
                <div className="container mb-lg-8 ">
                    <div className="row mb-5 mt-3">
                        {/* col */}
                        <div className="col-12">
                            <div className="mb-6">
                                <h2 className="mb-1 h1">🔥Senior Secondary Courses</h2>
                                <p className='ml-10'>
                                    These are the most subscribed courses among learners
                                    this term. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                                {/* For Loop */}                             
                                <div className="col">
                                    
                                    {/* Card */}
                                    <div className="card card-hover">
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src={sciencea}
                                                alt="course"
                                                className="card-img-top"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}

                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="badge bg-info">Cambridge Certificate</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2 ">
                                                <Link to={`/course-detail/slug/`} className="text-inherit text-decoration-none text-dark fs-5">
                                                    Chemistry - Titration
                                                    
                                                </Link>
                                                <p className='mt-2'>FORM 4</p>
                                            </h4>
                                            <small>By: Mr Motse Ntwaagae</small> <br />
                                            <small>150 Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex">
                                                <span className="align-text-top">
                                                    <span className="fs-6">
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star-half text-warning'></i>
                                                    </span>
                                                </span>
                                                <span className="text-warning">4.5</span>
                                                <span className="fs-6 ms-2">(120)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer">
                                            <div className="row align-items-center g-0">
                                                <div className="col">
                                                    <h5 className="mb-0">P50.00</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <button type='button' className="text-inherit text-decoration-none btn btn-primary me-2">
                                                        <i className="fas fa-shopping-cart text-primary text-white" />
                                                    </button>
                                                    <Link to={""} className="text-inherit text-decoration-none btn btn-primary">
                                                        Enroll Now <i className="fas fa-arrow-right text-primary align-middle me-2 text-white" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover">
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src={mathematics5}
                                                alt="course"
                                                className="card-img-top"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="badge bg-info">Cambridge</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2 ">
                                                <Link to={`/course-detail/slug/`} className="text-inherit text-decoration-none text-dark fs-5">
                                                    Calculus & Trigonometry
                                                </Link>
                                                
                                                <p className='mt-2'>Form 5</p>
                                            </h4>
                                            <small>By: S. Gaelebale</small> <br />
                                            <small>700 Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex">
                                                <span className="align-text-top">
                                                    <span className="fs-6">
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star-half text-warning'></i>
                                                    </span>
                                                </span>
                                                <span className="text-warning">4.5</span>
                                                <span className="fs-6 ms-2">(300)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer">
                                            <div className="row align-items-center g-0">
                                                <div className="col">
                                                    <h5 className="mb-0">P150.00</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="text-inherit text-decoration-none btn btn-primary">
                                                        <i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
                                                        Enroll Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover">
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src={setswana}
                                                alt="course"
                                                className="card-img-top"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="badge bg-info">cambridge</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2 ">
                                                <Link to={`/course-detail/slug/`} className="text-inherit text-decoration-none text-dark fs-5">
                                                    Setswana - Maboko
                                                </Link>
                                                <p className='mt-2'>FORM 4</p>
                                            </h4>
                                            <small>By: Eunice G. Moitse</small> <br />
                                            <small>1000 Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex">
                                                <span className="align-text-top">
                                                    <span className="fs-6">
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star-half text-warning'></i>
                                                    </span>
                                                </span>
                                                <span className="text-warning">5</span>
                                                <span className="fs-6 ms-2">(800)</span>
                                            </div>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="card-footer">
                                            <div className="row align-items-center g-0">
                                                <div className="col">
                                                    <h5 className="mb-0">P200.00</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="text-inherit text-decoration-none btn btn-primary">
                                                        <i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
                                                        Enroll Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover">
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src={setswana}
                                                alt="course"
                                                className="card-img-top"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="badge bg-info">cambridge</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2 ">
                                                <Link to={`/course-detail/slug/`} className="text-inherit text-decoration-none text-dark fs-5">
                                                    Setswana - Compositions
                                                </Link>
                                                <p className='mt-2'>FORM 4</p>
                                            </h4>
                                            <small>By: S. Gaelebale</small> <br />
                                            <small>1000 Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex">
                                                <span className="align-text-top">
                                                    <span className="fs-6">
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star text-warning'></i>
                                                        <i className='fas fa-star-half text-warning'></i>
                                                    </span>
                                                </span>
                                                <span className="text-warning">5</span>
                                                <span className="fs-6 ms-2">(800)</span>
                                            </div>
                                        </div>

                                        {/* Card Footer */}
                                        <div className="card-footer">
                                            <div className="row align-items-center g-0">
                                                <div className="col">
                                                    <h5 className="mb-0">P200.00</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="text-inherit text-decoration-none btn btn-primary">
                                                        <i className="fas fa-shopping-cart text-primary align-middle me-2 text-white" />
                                                        Enroll Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <nav className="d-flex mt-5">
                                  <ul className="pagination">
                                    <li
                                      className=""
                                    >
                                      <button
                                        className="page-link me-1"
                                      >
                                        <i className="ci-arrow-left me-2" />
                                        Previous
                                      </button>
                                    </li>
                                  </ul>
                                  <ul className="pagination">
                                    <li
                                        key={1}
                                        className="active"
                                      >
                                        <button
                                          className="page-link"
                                        >
                                          1
                                        </button>
                                      </li>
                                  </ul>
                                  <ul className="pagination">
                                    <li
                                      className={`totalPages`}
                                    >
                                      <button
                                        className="page-link ms-1"
                                      >
                                        Next
                                        <i className="ci-arrow-right ms-3" />
                                      </button>
                                    </li>
                                  </ul>
                                </nav>


                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="my-8 py-lg-8">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row align-items-center bg-primary gx-0 rounded-3 mt-5">
                        {/* col */}
                        <div className="col-lg-6 col-12 d-none d-lg-block">
                            <div className="d-flex justify-content-center pt-4">
                                {/* img */}
                                <div className="position-relative">
                                    <img
                                        src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
                                        alt="image"
                                        className="img-fluid mt-n8"
                                    />
                                    <div className="ms-n8 position-absolute bottom-0 start-0 mb-6">
                                        <img src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg" alt="dollor" />
                                    </div>
                                    {/* img */}
                                    <div className="me-n4 position-absolute top-0 end-0">
                                        <img src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg" alt="graph" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="text-white p-5 p-lg-0">
                                {/* text */}
                                <h2 className="h1 text-white">Become an course provider</h2>
                                <p className="mb-0">
                                    Register as a Course Provider and earn some money. You will also get an opportunity to turtor thousands of students.
                                </p>
                                <a href="#" className="btn bg-white text-dark fw-bold mt-4">
                                    Start Teaching Today <i className='fas fa-arrow-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 pt-8 pb-8 mt-5">
                <div className="container pb-8">
                    {/* row */}
                    <div className="row mb-lg-8 mb-5">
                        <div className="offset-lg-1 col-lg-10 col-12">
                            <div className="row align-items-center">
                                {/* col */}
                                <div className="col-lg-6 col-md-8">
                                    {/* rating */}
                                    <div>
                                        <div className="mb-3">
                                            <span className="lh-1">
                                                <span className="align-text-top ms-2">
                                                    <i className='fas fa-star text-warning'></i>
                                                    <i className='fas fa-star text-warning'></i>
                                                    <i className='fas fa-star text-warning'></i>
                                                    <i className='fas fa-star text-warning'></i>
                                                    <i className='fas fa-star text-warning'></i>
                                                </span>
                                                <span className="text-dark fw-semibold">4.5/5.0</span>
                                            </span>
                                            <span className="ms-2">(Based on 265 ratings)</span>
                                        </div>
                                        {/* heading */}
                                        <h2 className="h1">What our students say</h2>
                                        <p className="mb-0">
                                            Hear from 
                                            
                                            <span className="text-dark">teachers -, students and industry leaders -</span>
                                            in the learning space about how ALGOLEARN empowers them to provide
                                            quality online learning experiences.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4 text-md-end mt-4 mt-md-0">
                                    {/* btn */}
                                    <a href="#" className="btn btn-primary">
                                        View Reviews
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        {/* col */}
                        <div className="col-md-12">
                            <div className="position-relative">
                                {/* controls */}
                                {/* slider */}
                                <div className="sliderTestimonial">
                                    {/* item */}
                                    <div className="row">

                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card">
                                                    <div className="card-body text-center p-6">
                                                        {/* img */}
                                                        <img
                                                            src={avatar}
                                                            alt="avatar"
                                                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                                        />
                                                        <p className="mb-0 mt-3">
                                                            “The generated lorem Ipsum is therefore always free from
                                                            repetition, injected humour, or words etc generate lorem
                                                            Ipsum which looks racteristic reasonable.”
                                                        </p>
                                                        {/* rating */}
                                                        <div className="lh-1 mb-3 mt-4">
                                                            <span className="fs-6 align-top">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-warning">5</span>
                                                            {/* text */}
                                                        </div>
                                                        <h3 className="mb-0 h4">Gladys Colbert</h3>
                                                        <span>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card">
                                                    <div className="card-body text-center p-6">
                                                        {/* img */}
                                                        <img
                                                            src={avatar}
                                                            alt="avatar"
                                                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                                        />
                                                        <p className="mb-0 mt-3">
                                                            “The generated lorem Ipsum is therefore always free from
                                                            repetition, injected humour, or words etc generate lorem
                                                            Ipsum which looks racteristic reasonable.”
                                                        </p>
                                                        {/* rating */}
                                                        <div className="lh-1 mb-3 mt-4">
                                                            <span className="fs-6 align-top">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-warning">5</span>
                                                            {/* text */}
                                                        </div>
                                                        <h3 className="mb-0 h4">Gladys Colbert</h3>
                                                        <span>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card">
                                                    <div className="card-body text-center p-6">
                                                        {/* img */}
                                                        <img
                                                            src={avatar}
                                                            alt="avatar"
                                                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                                        />
                                                        <p className="mb-0 mt-3">
                                                            “The generated lorem Ipsum is therefore always free from
                                                            repetition, injected humour, or words etc generate lorem
                                                            Ipsum which looks racteristic reasonable.”
                                                        </p>
                                                        {/* rating */}
                                                        <div className="lh-1 mb-3 mt-4">
                                                            <span className="fs-6 align-top">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={11}
                                                                    height={11}
                                                                    fill="currentColor"
                                                                    className="bi bi-star-fill text-warning"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-warning">5</span>
                                                            {/* text */}
                                                        </div>
                                                        <h3 className="mb-0 h4">Gladys Colbert</h3>
                                                        <span>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />

        </>
    )
}

export default Index