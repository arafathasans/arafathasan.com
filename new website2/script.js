


// Wait for the document to be fully loaded
$(document).ready(function () {
  // Filter the projects when a filter option is clicked
  $('.portfolio-flters li').on('click', function () {
    $('.portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');

    const filterValue = $(this).data('filter');
    $('.portfolio-item').hide();

    if (filterValue === '*') {
      $('.portfolio-item').show();
    } else {
      $(filterValue).show();
    }
  });

  // Initialize lightbox plugin for image previews
  $('.glightbox').each(function () {
    $(this).attr('data-gallery', $(this).data('gallery'));
  });
});


