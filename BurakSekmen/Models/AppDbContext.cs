﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace BurakSekmen.Models
{
    public class AppDbContext: IdentityDbContext<User, Role, string>
    {
       
        public DbSet<Siteseo> Siteseos { get; set; }

        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<AracKategori> AracKategoris { get; set; }

        public DbSet<AracYakıt> AracYaks { get; set; }

        public DbSet<AracMarka> AracMarkas { get; set; }


        public DbSet<Duyuru> Duyurs { get; set; }

        public DbSet<Mail> Mails { get; set; }

       public DbSet<UserNot> UserNots { get; set; } 

       public DbSet<Contact> Contacts { get; set; }

        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        
    }
}
