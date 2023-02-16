using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<WebApplication1.Models.Student> Student { get; set; }
        public DbSet<WebApplication1.Models.Course> Course { get; set; }
        public DbSet<WebApplication1.Models.CourseStudent> CourseStudent { get; set; }
    }
}