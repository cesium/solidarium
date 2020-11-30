---
title: "Contribuir"
bg: contributions
color: white
border-color: white
icon: contribuir.png
---

{% for activity in site.data.agenda.contributions %}
  {% capture thecycle %}{% cycle 'even', 'odd' %}{% endcapture %}
  {% if thecycle == 'odd' %}
  <div class="activity">
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m3 logo-img valign">
        <img  src="img/{{ activity.logo-image }}" alt="{{ activity.title }}">
      </div>
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
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
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.button-name %}
          {% if activity.button-link %}
            <a class="waves-effect waves-light btn bg-{{ page.border-color }}" href="{{ activity.button-link }}" target="blank">{{ activity.button-name }}</a>
          {% endif %}
        {% endif %}
      </div>
    </div>
    {% if activity.subtext %}
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m12 activity-info">
        <p class="col m12 activity-desc"> {{ activity.subtext }} </p>
      </div>
    </div>
    {% endif %}
    {% if activity.donations-section %}
    <div class="row donation-row">
      {% for institution in activity.donations-section %}
        <div class="col s8 m4 donation-card">
          {% if institution.site %}
          <a href="{{ institution.site }}" target="_blank" style="text-decoration: none !important;">
          {% endif %}
            <h3 class="donation-title"><strong> {{ institution.name }} </strong></h3>
            <strong>MBWAY</strong> {{ institution.mbway }} <br>
            <strong>IBAN</strong> {{ institution.iban }} <br>
            <p></p>
          {% if institution.site %}
          </a>
          {% endif %}
        </div>
      {% endfor %}
    </div>
    {% endif %}
  </div>
  {% else %}
  <div class="activity">
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m3 logo-img valign img-mobile">
        <img src="img/{{activity.logo-image}}" alt="{{activity.title}}">
      </div>
      <div class="col m9 activity-info">
        <h3 class="activity-title"> {{ activity.title }} </h3>
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
        <p class="col m12 activity-desc"> {{ activity.text }} </p>
        {% if activity.subtext %}
        <p class="col m12 activity-desc"> {{ activity.subtext }} </p>
        {% endif %}
        {% if activity.button-name %}
          {% if activity.button-link %}
            <a class="waves-effect waves-light btn bg-{{ page.border-color }}" href="{{ activity.button-link }}" target="blank">{{ activity.button-name }}</a>
          {% endif %}
        {% endif %}
      </div>
      <div class="col m3 logo-img valign img-desktop">
        <img src="img/{{activity.logo-image}}" alt="{{activity.title}}">
      </div>
    </div>
    {% if activity.subtext %}
    <div class="row activity-info-wrapper valign-wrapper">
      <div class="col m12 activity-info">
        <p class="col m12 activity-desc"> {{ activity.subtext }} </p>
      </div>
    </div>
    {% endif %}
    {% if activity.donations-section %}
    <div class="row donation-row">
      {% for institution in activity.donations-section %}
        <div class="col s8 m4 donation-card">
          <h3 class="donation-title"><strong> {{ institution.name }} </strong></h3>
          <strong>MBWAY</strong> {{ institution.mbway }} <br>
          <strong>IBAN</strong> {{ institution.iban }} <br>
          <p></p>
        </div>
      {% endfor %}
    </div>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}
