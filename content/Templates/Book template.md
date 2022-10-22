---
bookStatus: started
---

  ![]({{bookImageUrl}})
# {{title}}
## Metadata

{% if authorUrl %}
* Author: [{{author}}]({{authorUrl}})
{%  elif author %}
* Author [[{{author}}]]
{%  endif %}
{%  if pages%} *Pages {{pages}} {%  endif  %}
{%  if url %} *[Reference]({{url}}) {%  endif  %}


## Highlights
----


{{highlights}}