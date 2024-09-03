use anchor_lang::prelude::*;

declare_id!("E2yPNn2G68VNzb6qQdVC6SFjdTLTJ8uQvVzv4FAfoerC");

#[program]
pub mod rust_encode_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
