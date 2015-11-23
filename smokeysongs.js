
//list of songs for new album
var songList = ["It's in Demand", "Baby Big Shot", "Start Wearing Black",
    "Stick Man", "Bad Blood", "Ugly Evergreen", "Haller Lake",
    "Horde of Angels", "Desiree", "Be a Man", "A Soul, a Solo",
    "LSDirty Beach", "Not Enough Time"
];
//var for list ul
var $list = $('ol');
//populate the list
var populateList = function(songs) {
    for (var i = 0; i < songs.length; i++) {
        $list.append('<li><span class="song">' + songs[i] +
            '</span><a href="#" class="deleter">X</a></li>');
        $('a.deleter').on('click', function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });
    }
}
//resets the list
var resetList = function() {
    //D E S T R O Y LIST
    $list.children().remove();
    //REBUILD LIST!
    populateList(songList);
}
$(document).ready(function() {
    populateList(songList);
    //makes the list sortable
    $list.sortable();
    $list.disableSelection();
    
    $('#reset').on('click', function() {
        resetList();
    });
});