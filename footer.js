document.write(`

<section id="footer">
<div class="inner">

    <div id="success" class="success-msg" style="margin-bottom: 3rem;">
        <i class="fa fa-check"></i>
        The form has been successfully submitted. We will reach out to you soon!
      </div>	

    <h2 class="major">Get in touch</h2>
    <!-- <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p> -->
    <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
    <!-- <form id="contactform" target="dummyframe" method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdotjRMPLAdAMb_u1RVtGfM_t2ip_XdPztC2rymi3YVoEdqGA/formResponse" onsubmit=""> -->
    <form id="contactform" target="dummyframe" method="post" action="https://script.google.com/macros/s/AKfycbzDflHV111he6PPE5iCcaWmEhds_XDQoPU_PxRS6ZGEFOyR8jmKX-a_Cjii0JQQZCnO/exec" onsubmit="">
        <div class="fields">

            <input type="hidden" name="Date" value="" id="date">
            <!-- <input type="hidden" name="Name" value="fjdksla;jkl;fdsajkl;fasd" id="name"> -->

            
            <div class="field">
                <label for="Name">Name</label>
                <!-- <input type="text" required name="entry.1493623600" id="name" /> -->
                <input type="text" name="Name" id="name">
            </div>
            <div class="field">
                <label for="Phone Number">Phone Number</label>
                <!-- <input type="tel" required name="entry.440994670" id="phone" /> -->
                <input type="text" required name="Phone Number" id="phone" />
            </div>
            <div class="field">
                <label for="Email">Email</label>
                <!-- <input type="email" required name="entry.1065624121" id="email" /> -->
                <input type="email" required name="Email" id="email" />
            </div>
            <div class="field">
                <label for="Message">Message</label>
                <!-- <textarea name="entry.1279566402" required id="message" rows="4"></textarea> -->
                <textarea name="Message" required id="Message" rows="4"></textarea>
            </div>
        </div>
        <ul class="actions">
            <li><input type="submit" value="Send Message" /></li>
        </ul>
    </form>
    <ul class="contact">
        <!-- <li class="icon solid fa-home">
                        Untitled Inc<br />
                        1234 Somewhere Road Suite #2894<br />
                        Nashville, TN 00000-0000
                    </li>
                    <li class="icon solid fa-phone">(000) 000-0000</li> -->
        <li class="icon solid fa-envelope"><a
                href="mailto:contact@scriptcore.org">contact@scriptcore.org</a></li>
        <!-- <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
                    <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li> -->
        <li class="icon brands fa-instagram"><a target="_blank" href="https://www.instagram.com/scriptcore1">@scriptcore1</a></li>
    </ul>
    <ul class="copyright">
        <li>&copy; Scriptcore. All rights reserved.</li>
    </ul>
</div>
</section>

    `);