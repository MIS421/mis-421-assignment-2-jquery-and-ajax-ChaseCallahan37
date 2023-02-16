using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        //Supports students who are undecided
        public string? Major { get; set; }
        public DateTime DOB { get; set; }
    }
}
