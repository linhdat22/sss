<template>
    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user">
<!--                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                               placeholder="First Name">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                                               placeholder="Last Name">
                                    </div>
                                </div>-->
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-user my-3" id="exampleInputUser"
                                           placeholder="Username">
                                </div>

                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                           placeholder="Email Address">
                                </div><div class="form-group">
                                <input type="text" class="form-control form-control-user" id="exampleInputEmail"
                                       placeholder="SDT">
                            </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                      <label for="inputState">Gioi tinh</label>
                                        <select id="inputState" class="form-control">
                                            <option selected value="Chon ... ">Chon...</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nu">Nu</option>
                                        </select>
                                    </div>
                                <div class="col-sm-6">
                                    <label for="inputState">Gioi tinh</label>
                                        <input type="date" class="form-control"
                                               id="exampleRepeatPassword" placeholder="Repeat Password">
                                </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                               id="exampleInputPassword" placeholder="Password">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                               id="exampleRepeatPassword" placeholder="Repeat Password">
                                    </div>
                                </div>
                                <a href="/login" class="btn btn-primary btn-user btn-block">
                                    Register Account
                                </a>
                                <hr>
<!--                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>-->
<!--                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>-->
                            </form>
                            <hr>
<!--                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>-->
                            <div class="text-center">
                                <router-link class="small" to="/login">Already have an account? Login!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'register-page',
    data(){
        return {
            username:'',
            password:'',
            isAdmin:''
        }
    }
}
</script>