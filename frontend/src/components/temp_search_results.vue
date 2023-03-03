<template>
  <div id="tempsearchresults">
  <div class="card" style="width: 20rem; height: 7rem;">
    <div style="margin: 0; padding: 0; height: 100%; width: 100%;">
      <div class="h-100" style="width: 45%; display: inline-block; margin: 0; padding: 0;">
        <img class="card-img-top" src="../img/mark-dp.jpg" alt="Card image cap">
      </div>
      <div class="h-100" style="width: 55%; display: inline-block; float: right; margin: 0; padding: 0;">
        <div class="card-body" style="display: inline-block;">
          <h5 class="card-title">Brian Li</h5>
          <p class="card-text">25 years (Male)</p>
          <p class="card-text">Approx. Budget: $1000</p>
          <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
        </div>
      </div>
    </div>
  </div>

  
  </div>
  <!-- My Connections Tab Modal -->
  <!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
          <div class="h-100" style="width: 30%; display: inline-block;">
            <img class="card-img-top-popup img-thumbnail" src="../img/mark-dp.jpg" alt="Card image cap">
            <button class="btn btn-primary" style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;" >Remove Connection</button>
          </div>
          <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
            <h4 class="card-title" style="margin-top: 25px;">Mathew Roberts</h4>
            <p class="profile-card-text">25 years (Male)</p>
            <p class="profile-card-text">Budget: $1000 to $1500 per month</p>
            <table class="table table-bordered" style="margin-top: 15px; text-align: center;">
              <thead>
                <tr class="table-dark">
                  <th scope="col">Occupation</th>
                  <th scope="col">Smoking</th>
                  <th scope="col">Pets</th>
                  <th scope="col">Vegan</th>
                  <th scope="col">Sleep Early</th>
                  <th scope="col">Wake Up Early</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <td>Student</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-body">
          <p style="text-align: left;">
            <b>Mathew Roberts's Introduction:</b>
            <br/>I graduated from UCSD in 2022 and am currently working at a biotech lab in Sorrento
            Valley. I am a very clean person and roommate, who loves to cook, and bake. I keep my room clean and ensure my
            belongings don’t clutter the common spaces. I don’t have pets and am allergic to cats. I mostly keep to myself
            and play a lot of videogames. I smoke weed and drink occasionally. Would like to move in around end of
            March/April 2023. </p>
        </div>
      </div>
    </div>
  </div> -->

    <!-- Sent Requests Tab Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
          <div class="h-100" style="width: 30%; display: inline-block;">
            <img class="card-img-top-popup img-thumbnail" src="../img/mark-dp.jpg" alt="Card image cap">
            <button class="btn btn-primary" disabled style="width: 100%; margin-top: 3px; background-color: maroon; border-color: maroon;" >Status: Rejected</button>
            <!-- <button class="btn btn-primary" disabled style="width: 100%; margin-top: 3px;" >Status: Pending</button> -->
          </div>
          <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
            <h4 class="card-title" style="margin-top: 25px;">Mathew Roberts</h4>
            <p class="profile-card-text">25 years (Male)</p>
            <p class="profile-card-text">Budget: $1000 to $1500 per month</p>
            <table class="table table-bordered" style="margin-top: 15px; text-align: center;">
              <thead>
                <tr class="table-dark">
                  <th scope="col">Occupation</th>
                  <th scope="col">Smoking</th>
                  <th scope="col">Pets</th>
                  <th scope="col">Vegan</th>
                  <th scope="col">Sleep Early</th>
                  <th scope="col">Wake Up Early</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <td>Student</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-body">
          <div style="float: left; width: 30%">
            <p style="text-align: justify;">
            <b>Sent Message:</b>
            <br/>Hi Mathew Roberts, I hope you are doing well. I am Brian Li. I am a MS CS student from UCSD and wish to connect with you to find whether we could be potential roommates.</p>          
          </div>
          <div style="text-align: justify; margin-left: 35%">
            <p>
            <b>Mathew Robert's Introduction:</b>
            <br/>I graduated from UCSD in 2022 and am currently working at a biotech lab in Sorrento
            Valley. I am a very clean person and roommate, who loves to cook, and bake. I keep my room clean and ensure my
            belongings don’t clutter the common spaces. I don’t have pets and am allergic to cats. I mostly keep to myself
            and play a lot of videogames. I smoke weed and drink occasionally. Would like to move in around end of
            March/April 2023. </p>
          </div>
        </div>
      </div>
    </div>
  </div>


    <!-- Received Requests Tab Modal -->
    <!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
          <div class="h-100" style="width: 30%; display: inline-block;">
            <img class="card-img-top-popup img-thumbnail" src="../img/mark-dp.jpg" alt="Card image cap">
            <button class="btn btn-primary" style="width: 48%; margin-top: 3px; background-color: green; border-color: green; float: left;" >Accept</button>
            <button class="btn btn-primary" style="width: 48%; margin-top: 3px; background-color: maroon; border-color: maroon;" >Reject</button>
          </div>
          <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
            <h4 class="card-title" style="margin-top: 25px;">Mathew Roberts</h4>
            <p class="profile-card-text">25 years (Male)</p>
            <p class="profile-card-text">Budget: $1000 to $1500 per month</p>
            <table class="table table-bordered" style="margin-top: 15px; text-align: center;">
              <thead>
                <tr class="table-dark">
                  <th scope="col">Occupation</th>
                  <th scope="col">Smoking</th>
                  <th scope="col">Pets</th>
                  <th scope="col">Vegan</th>
                  <th scope="col">Sleep Early</th>
                  <th scope="col">Wake Up Early</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <td>Student</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-body">
          <div style="float: left; width: 30%">
            <p style="text-align: justify;">
            <b>Received Message:</b>
            <br/>Hi Brian Li, I hope you are doing well. I am Mathew Roberts. I am a MS CS student from UCSD and wish to connect with you to find whether we could be potential roommates.</p>          
          </div>
          <div style="text-align: justify; margin-left: 35%">
            <p>
            <b>Mathew Roberts's Introduction:</b>
            <br/>I graduated from UCSD in 2022 and am currently working at a biotech lab in Sorrento
            Valley. I am a very clean person and roommate, who loves to cook, and bake. I keep my room clean and ensure my
            belongings don’t clutter the common spaces. I don’t have pets and am allergic to cats. I mostly keep to myself
            and play a lot of videogames. I smoke weed and drink occasionally. Would like to move in around end of
            March/April 2023. </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.modal-body-title {
  text-align: left;
  color: #006400;
  font-weight: 900;
}

.img-thumbnail {
  height: 100%;
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: 100%;
  float: left;
  object-fit: cover;
  border-radius: 5px;
}

.card-img-top-popup {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

h5 {
  margin: 0;
}

p {
  margin: 0;
}

.card-title {
  text-align: left;
  color: black;
  font-weight: 900;
}

.card-text {
  text-align: left;
  color: black;
  font-size: 13px;
}

.profile-card-text {
  text-align: left;
  color: black;
  font-size: large;
}

#tempsearchresults {
  position: relative;
  height: 85vh;
  background-color: #e5e5e5;
}

#temp_search {
  text-align: center;
  position: relative;
  top: 30%;
  font-size: 60px;
  font-weight: bolder;
}

#search {
  background-color: #fff;
}

table,
th,
td {
  border: 0.75px solid;
  border-bottom: 1px solid;
}</style>
