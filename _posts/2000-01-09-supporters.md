---
title: "Parceiros"
bg: supporters
color: white
icon: org.png
---

<div class="row partners organization">
{% for partner in site.data.partners %}
  <div class="col s12 partner {% if full-width %}full-width{% endif %} valign">
    <a href="{{ partner.site }}" target="blank"><img src="img/partners/{{ partner.logo-image }}"/></a>
  </div>
{% endfor %}
</div>
