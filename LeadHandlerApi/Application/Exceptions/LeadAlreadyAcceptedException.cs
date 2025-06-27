using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Exceptions;
public class LeadAlreadyAcceptedException : Exception
{
    public LeadAlreadyAcceptedException(string message) : base(message) { }
}
