﻿var my_global_visit_source = document.querySelector("meta[name='visit_source']").getAttribute('content');
var my_global_referrer_url = document.querySelector("meta[name='referrer_url']").getAttribute('content');
var my_global_user_host_address = document.querySelector("meta[name='user_host_address']").getAttribute('content');
var my_global_center_id = document.querySelector("meta[name='center_id']").getAttribute('content');
var my_global_center_acronym = document.querySelector("meta[name='center_acronym']").getAttribute('content');
var my_global_chat_conversion_id = document.querySelector("meta[name='chat_conversion_id']").getAttribute('content');
var my_global_call_conversion_id = document.querySelector("meta[name='call_conversion_id']").getAttribute('content');
var my_global_contact_form_conversion_id = document.querySelector("meta[name='contact_form_conversion_id']").getAttribute('content');
var my_global_financing_inquire_conversion_id = document.querySelector("meta[name='financing_inquire_conversion_id']").getAttribute('content');
var my_global_preop_form_conversion_id = document.querySelector("meta[name='preop_form_conversion_id']").getAttribute('content');
var my_global_analytics_id = document.querySelector("meta[name='analytics_id']").getAttribute('content');
var my_global_livechat_id = document.querySelector("meta[name='livechat_id']").getAttribute('content');
var my_global_livechat_group = document.querySelector("meta[name='livechat_group']").getAttribute('content');
var my_global_is_mobile = document.querySelector("meta[name='is_mobile']").getAttribute('content') == 'true' ? true : false;
var my_global_facebook_pixel_id = document.querySelector("meta[name='fb_pixel']").getAttribute('content');
var my_global_recaptcha_site_key = document.querySelector("meta[name='recaptcha_site_key']").getAttribute('content');
var my_global_traffick_type_label = '';
var my_global_event_label = '';
var my_global_first_visit_label;
var my_global_last_visit_label;
var my_global_first_visit_id;
var my_global_last_visit_id;
var sliderRecaptchaWasLoaded = false;
var sliderContactFormReady = false;
var pageRecaptchaWasLoaded = false;
var pageContactFormReady = false;