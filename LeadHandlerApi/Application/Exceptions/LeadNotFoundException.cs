using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Exceptions;
public class LeadNotFoundException : Exception
{
    public LeadNotFoundException(string message) : base(message) { }

}
