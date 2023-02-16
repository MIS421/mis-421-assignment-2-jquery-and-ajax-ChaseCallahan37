using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class CourseStudent
    {
        public int Id { get; set; }
        [ForeignKey("Student")]
        public int? StudentID { get; set; }
        public Student? Student { get; set; }
        [ForeignKey("Course")]
        public int? CourseID { get; set; }
        public Course? Course { get; set; }

    }
}
