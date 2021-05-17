import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'

const about = () => {
    return (
        <Layout title="About Page">
            {/* <p>about</p> */}
        <div class="container ">
           
        </div>
            <body>
            <hr class="my-4"></hr>
                
                <p class="lead-para"> 
                    This is an ABOUT page in our website with the purpose of informing users what this website is about. 
                </p>

                <p class="second-para"> 
                    This website seeks to be host for some features of the NASA web API. You can see on the 'Home'
                    some basic stuff we have on our website and what we try to accomplish. Choose the 'Photo Picker!' page to select photos
                    using the functionality provided by the NASA web API.
                </p>


                <h5>
                    Information regarding the NASA web API
                </h5>
                <p class="third-para">
                    Image metadata and key information regarding the natural color and the enhanced color imagery are provided by the JSON API 
                    and can be requested by date and for the most recent available date. A listing of all available dates can also be retrieved 
                    via the API for more granular control.
                </p>

                <h5>
                    EPIC Daily “Blue Marble” API
                </h5>
                <p class="fourth-para">
                    The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
                    Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives
                    of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 
                    30-cm aperture Cassegrain telescope.
                </p>

                <br></br>
                <h5 class="example-query">
                    Querying the API
                </h5>
                <table>
                    <tbody><tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>natural</td>
                        <td>string</td>
                        <td>Most Recent Natural Color</td>
                        <td>Retrieve metadata on the most recent date of natural color imagery.</td>
                    </tr>
                    <tr>
                        <td>natural/date</td>
                        <td>YYYY-MM-DD</td>
                        <td>Most Recent Available</td>
                        <td>Retrieve metadata for natural color imagery available for a given date.</td>
                    </tr>
                    <tr>
                        <td>natural/all</td>
                        <td>string</td>
                        <td>Dates for Natural Color</td>
                        <td>Retrieve a listing of all dates with available natural color imagery.</td>
                    </tr>
                    <tr>
                        <td>natural/available</td>
                        <td>string</td>
                        <td>Dates for Natural Color</td>
                        <td>Retrieve a listing of all dates with available natural color imagery.</td>
                    </tr>
                    <tr>
                        <td>enhanced</td>
                        <td>string</td>
                        <td>Most Recent Enhanced Color</td>
                        <td>Retrieve metadata on the most recent date of enhanced color imagery.</td>
                    </tr>
                    <tr>
                        <td>enhanced/date</td>
                        <td>YYYY-MM-DD</td>
                        <td>Most Recent Available</td>
                        <td>Retrieve metadata for enhanced color  imagery for a given date.</td>
                    </tr>
                    <tr>
                        <td>enhanced/all</td>
                        <td>string</td>
                        <td>Dates for Enhanced Imagery</td>
                        <td>Retrieve a listing of all dates with available enhanced color imagery.</td>
                    </tr>
                    <tr>
                        <td>enhanced/available</td>
                        <td>string</td>
                        <td>Dates for Enhanced Imagery</td>
                        <td>Retrieve a listing of all dates with available enhanced color imagery.</td>
                    </tr>
                    </tbody>
                </table>


                <br></br>
                <br></br>
                <h5>
                    Image Locations
                </h5>
                <p>
                    All of our imagery is stored in an archival directory subdivided by collection,
                    year, month, day, and image type.  There are three separate image types available:
                    full resolution PNG, half-resolution JPG, and thumbnails.  Paths to imagery can
                    be found using the following schema:
                </p>
                <table class="api">
                    <tbody><tr>
                        <th>Site Name</th>
                        <th>Archive</th>
                        <th>Collection</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Day</th>
                        <th>Image Type</th>
                        <th>File Name</th>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>natural</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>png</td>
                        <td>epic_1b_20161031xxxx.png</td>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>natural</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>jpg</td>
                        <td>epic_1b_20161031xxxx.jpg</td>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>natural</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>thumbs</td>
                        <td>epic_1b_20161031xxxx.jpg</td>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>enhanced</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>png</td>
                        <td>epic_RGB_20161031xxxx.png</td>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>enhanced</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>jpg</td>
                        <td>epic_RGB_20161031xxxx.jpg</td>
                    </tr>
                    <tr>
                        <td>https://epic.gsfc.nasa.gov</td>
                        <td>archive</td>
                        <td>enhanced</td>
                        <td>2016</td>
                        <td>10</td>
                        <td>31</td>
                        <td>thumbs</td>
                        <td>epic_RGB_20161031xxxx.jpg</td>
                    </tr>
                </tbody>
                </table>
                
                <br></br>
                <h5 class="example-query">
                    Example Queries
                </h5>
                <p>
                    <a target="_blank" href="https://epic.gsfc.nasa.gov/api/natural">
                        <code>
                            https://epic.gsfc.nasa.gov/api/natural
                        </code>
                    </a>
                    <br></br>
                    <a target="_blank" href="https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31">
                        <code>
                            https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31
                        </code>
                    </a>
                    <br></br>
                    <a target="_blank" href="https://epic.gsfc.nasa.gov/api/natural/all">
                        <code>
                            https://epic.gsfc.nasa.gov/api/natural/all
                        </code>
                    </a>
                    <br></br>
                    <a target="_blank" href="https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png">
                        <code>
                            https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
                        </code>
                    </a>
                </p>
                <br></br>
                <br></br>
                <br></br>
            </body>

        </Layout>
    )
}

export default about