<template>
  <div class="contact">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <h2 class="heading-s text-center">Contact</h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="h-card">
          <h2 class="h-card-head d-flex justify-content-between">
            <span>Contact</span>
            <i class="fas fa-paper-plane"></i>
          </h2>

          <div class="content row">
            <!-- ========== -->
            <div
              class="content-data col-12 col-md-6 d-flex justify-content-center align-items-center"
            >
              <div class="info">
                <div class="info-item d-flex">
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:hosmarey@gmail.com">HosMarey@gmail.com</a>
                </div>
                <div class="info-item d-flex">
                  <i class="fas fa-phone-alt"></i>
                  <a href="tel:+201207721288">+2 012 077 212 88</a>
                </div>
                <div class="info-item d-flex">
                  <i class="fas fa-home"></i>
                  <p>Mansoura (ready to relocate)</p>
                </div>
              </div>
            </div>
            <!-- ============= -->
            <div
              class="content-form col-12 col-md-6 d-flex justify-content-center align-items-center"
            >
              <form action="https://formspree.io/hosmarey@gmail.com" method="POST">
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Full name" required  name="fullName"/>
                  </div>
                  <div class="col">
                    <input type="email" class="form-control" placeholder="Email" required name="email" />
                  </div>
                </div>
                <div class="row">
                  <input type="text" class="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div class="row">
                  <textarea class="form-control" rows="3" placeholder="Message" required name="message"></textarea>
                </div>
                <div class="row">
                  <button class="btn btn-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
            <!-- ============== -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import mailgun from 'mailgun-js';
// import axios from 'axios';
export default {
}
</script>

<style lang="scss" scoped>
@import "@/styles/_styles.scss";

.contact {
  .h-card {
    width: 100%;
  }
  .content {
    &-data {
      height: 40rem;
      border-radius: 4px;
      background-image: url("../assets/img/contact-man.png");
      background-repeat: no-repeat;
      background-position: left bottom;
    }
    &-form {
      form {
        width: 80%;
        .btn {
          width: 100%;
        }
        input,
        textarea {
          font-size: 1.6rem;
          padding: 2rem 1rem 2rem 2.5rem;
          border: 1px solid $color-gray-middle;
          background-color: $color-gray-white;
          border-radius: 4px;
          &::placeholder {
            color: $color-gray-dark;
            font-size: 1.5rem;
          }
        }
        .row {
          margin: 2rem 0;
        }
        .col:first-child {
          margin-right: 1rem;
        }
      }
    }
    .info {
      transform: translate(4rem, -2rem);
      &-item {
        margin: 1rem 0;
      }
      i {
        color: $color-white;
        background-color: $color-gold-dark;
        font-size: 1.4rem;
        padding: 0.6rem;
        border-radius: 30px;
        margin-right: 1.5rem;
      }
      a {
        color: $color-text-p;
        &:hover {
          color: $color-gold-dark;
        }
      }
    }
  }
}

// Phones
@media (max-width: 576px) {
  .contact {
    .content-data {
      height: 20rem;
    }
  }
}

// tablets
@media (max-width: 768px) {
  .contact {
    .content-data {
      background: none;
    }
    .info {
      transform: translate(0, 0) !important;
    }
  }
}
</style>