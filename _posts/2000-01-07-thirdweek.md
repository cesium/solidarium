---
title: "16 a 22"
bg: thirdweek
color: white
border-color: white
button-bg: white
next-bg: fourthweek
icon: 3.png
---

<div class="section-lines section-top section-left"></div>
{% for activity in site.data.agenda.thirdweek %}
  {% capture thecycle %}{% cycle 'even', 'odd' %}{% endcapture %}
  {% if thecycle == 'odd' %}
  {% if activity == site.data.agenda.thirdweek.last %}
  <div class="activity section-left">
  {% else %}
  <div class="activity section-left section-bottom">
  {% endif %}
    <div class="row activity-info-wrapper valign-wrapper">
      {% if activity.image %}
      <div class="col m3 activity-img valign">
        <a href="img/{{activity.image}}" data-lightbox="{{activity.image}}" data-title="{{ activity.title }}">
          <img  src="img/{{activity.image}}" alt="{{ activity.title }}">
        </a>
      </div>
      {% else %}
      <div class="col m3 logo-img valign">
        <img  src="img/{{activity.logo-image}}" alt="{{ activity.title }}">
      </div>
      {% endif %}
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
        {% if activity.date %}
        <div class="col s12 activity-date">
          <i class="fa fa-calendar"></i> <span> {{ activity.date }} </span>
        </div>
        {% endif %}
        {% if activity.time %}
        <div class="col s12 activity-time">
          <i class="fa fa-clock-o"></i> <span> {{ activity.time }} </span>
        </div>
        {% endif %}
        {% if activity.place %}
        <div class="col s12 activity-place">
          <i class="fa fa-map-marker"></i> <span> {{ activity.place }} </span>
        </div>
        {% endif %}
        {% if activity.speaker %}
        <div class="col s12 activity-speaker">
          <i class="fa fa-user"></i> <span> {{ activity.speaker }} </span>
        </div>
        {% endif %}
        {% if activity.org %}
        <div class="col s12 activity-org">
          <i class="fa fa-users"></i> <span> {{ activity.org }} </span>
        </div>
        {% endif %}
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.typeform %}
        <a class="waves-effect waves-light btn" href="{{ activity.typeform }}" target="blank">Inscrição</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% else %}
  {% if activity == site.data.agenda.thirdweek.last %}
  <div class="activity section-right">
  {% else %}
  <div class="activity section-right section-bottom">
  {% endif %}
    <div class="row activity-info-wrapper valign-wrapper">
      {% if activity.image %}
      <div class="col m3 activity-img valign img-mobile">
        <a href="img/{{activity.image}}" data-lightbox="{{activity.image}}-mobile" data-title="{{ activity.title }}">
          <img  src="img/{{activity.image}}" alt="{{ activity.title }}">
        </a>
      </div>
      {% else %}
      <div class="col m3 logo-img valign img-mobile">
        <img  src="img/{{activity.logo-image}}" alt="{{ activity.title }}">
      </div>
      {% endif %}
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
        {% if activity.date %}
        <div class="col s12 activity-date">
          <i class="fa fa-calendar"></i> <span> {{ activity.date }} </span>
        </div>
        {% endif %}
        {% if activity.time %}
        <div class="col s12 activity-time">
          <i class="fa fa-clock-o"></i> <span> {{ activity.time }} </span>
        </div>
        {% endif %}
        {% if activity.place %}
        <div class="col s12 activity-place">
          <i class="fa fa-map-marker"></i> <span> {{ activity.place }} </span>
        </div>
        {% endif %}
        {% if activity.speaker %}
        <div class="col s12 activity-speaker">
          <i class="fa fa-user"></i> <span> {{ activity.speaker }} </span>
        </div>
        {% endif %}
        {% if activity.org %}
        <div class="col s12 activity-org">
          <i class="fa fa-users"></i> <span> {{ activity.org }} </span>
        </div>
        {% endif %}
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.typeform %}
        <a class="waves-effect waves-light btn" href="{{ activity.typeform }}" target="blank">Inscrição</a>
        {% endif %}
      </div>
      {% if activity.image %}
      <div class="col m3 activity-img valign img-desktop">
        <a href="img/{{activity.image}}" data-lightbox="{{activity.image}}" data-title="{{ activity.title }}">
          <img  src="img/{{activity.image}}" alt="{{ activity.title }}">
        </a>
      </div>
      {% else %}
      <div class="col m3 logo-img valign img-desktop">
        <img  src="img/{{activity.logo-image}}" alt="{{ activity.title }}">
      </div>
      {% endif %}
    </div>
  </div>
  {% endif %}
{% endfor %}
{% if thecycle == 'even' %}
<div class="section-lines section-bottom section-left"></div>
  {% else %}
<div class="section-lines section-bottom section-right"></div>
{% endif %}