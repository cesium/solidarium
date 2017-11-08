---
title: "2ª Semana - 10 a 16"
bg: secondweek
color: white
border-color: white
next-bg: thirdweek
fa-icon: battery-three-quarters
---

<div class="section-lines section-top section-left"></div>
{% for activity in site.data.agenda.secondweek %}
  {% capture thecycle %}{% cycle 'even', 'odd' %}{% endcapture %}
  {% if thecycle == 'odd' %}
  {% if activity == site.data.agenda.secondweek.last %}
  <div class="activity section-left">
  {% else %}
  <div class="activity section-left section-bottom">
  {% endif %}
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m3 activity-img valign">
        <img  src="img/{{activity.image}}" alt="{{ activity.title }}">
      </div>
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
        <div class="col s12 activity-time">
          <i class="fa fa-clock-o"></i> <span> {{ activity.time }} </span>
        </div>
        <div class="col s12 activity-place">
          <i class="fa fa-map-marker"></i> <span> {{ activity.place }} </span>
        </div>
        {% if activity.speaker %}
        <div class="col s12 activity-speaker">
          <i class="fa fa-user"></i> <span> {{ activity.speaker }} </span>
        </div>
        {% endif %}
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.typeform %}
        <a class="waves-effect waves-light btn bg-{{ page.next-bg }}" href="{{ activity.typeform }}" target="blank">Inscrição</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% else %}
  {% if activity == site.data.agenda.secondweek.last %}
  <div class="activity section-right">
  {% else %}
  <div class="activity section-right section-bottom">
  {% endif %}
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m3 activity-img valign img-mobile">
        <img src="img/{{activity.image}}" alt="{{activity.title}}">
      </div>
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
        <div class="col s12 activity-time">
          <i class="fa fa-clock-o"></i> <span> {{ activity.time }} </span>
        </div>
        <div class="col s12 activity-place">
          <i class="fa fa-map-marker"></i> <span> {{ activity.place }} </span>
        </div>
        {% if activity.speaker %}
        <div class="col s12 activity-speaker">
          <i class="fa fa-user"></i> <span> {{ activity.speaker }} </span>
        </div>
        {% endif %}
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.typeform %}
        <a class="waves-effect waves-light btn bg-{{ page.next-bg }}" href="{{ activity.typeform }}" target="blank">Inscrição</a>
        {% endif %}
      </div>
      <div class="col m3 activity-img valign img-desktop">
        <img src="img/{{activity.image}}" alt="{{activity.title}}">
      </div>
    </div>
  </div>
  {% endif %}
{% endfor %}
{% if thecycle == 'even' %}
<div class="section-lines section-bottom section-left"></div>
  {% else %}
<div class="section-lines section-bottom section-right"></div>
{% endif %}