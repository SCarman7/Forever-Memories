$('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

    const title = "Suite Memories";
    const content = "This is my first post";

    $('#blogTitlePreview') .text(title);
    $('#blogContentPreview').text('This is my first post');